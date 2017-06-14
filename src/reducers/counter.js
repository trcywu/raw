function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.counter;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], counter: state[i].counter + 1},
        ...state.slice(i + 1), // after the one we are updating
      ],
      case 'DECREMENT_LIKES' :
        console.log("Decrementing Likes");
        const i = action.counter;
        return [
          ...state.slice(0,i),
          {...state[i], counter: state[i].counter -1},
          ...state.slice(i + 1),
        ]
    default:
      return state;
  }
}

export default posts;
