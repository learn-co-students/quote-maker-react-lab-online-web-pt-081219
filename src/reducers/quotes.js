export default (state = [], action) => {
  let quoteId;
  let quote;
  switch (action.type) {


    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      console.log(action.quoteId)
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      console.log(action.quoteId)
      quoteId = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteId];

      return [
        ...state.slice(0, quoteId),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(quoteId + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      console.log(action.quoteId)
      quoteId = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteId];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, quoteId),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(quoteId + 1)
        ];
      }
      return state;  

    default:
      return state;
  }
  
}
