//what are the things that are going to happen?
//actions are just objects that are going to be dispatched. send as little information as possible in your actions
//increment heart
// every reducer runs everytime an action is fired, we have to write the logic as to which state changes


export function increment(counter){
  return{
    type: 'INCREMENT_COUNTER',
    counter
  };
}

export function decrement(counter) {
  return{
    type: 'DECREMENT_COUNTER',
    counter
  };
}
