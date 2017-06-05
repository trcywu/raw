export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
            return [
        // from the start to the one we want to delete
              ...state.slice(0,action.index),
        // after the deleted one, to the end
              ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}
