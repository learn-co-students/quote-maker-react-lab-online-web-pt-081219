export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {


    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      console.log(action.id)
      return state.filter(quote => quote.id !== action.id);

    case 'UPVOTE_QUOTE':
      console.log(action.id)
      idx = state.findIndex(quote => quote.id === action.id);
      quote = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      console.log(action.id)
      idx = state.findIndex(quote => quote.id === action.id);
      quote = state[idx];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(idx + 1)
        ];
      }
      return state;  

    default:
      return state;
  }
  
}
