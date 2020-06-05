import uuid from 'uuid';

export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, 
              {
                id: action.quote.id,
                content: action.quote.content,
                author: action.quote.author,
                votes: action.quote.votes
              }
              ]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':

      idx = state.findIndex(quote => quote.id  === action.quoteId)
      quote = state.find(quote => quote.id  === action.quoteId)
      state= [...state.slice(0, idx), ...state.slice(idx + 1)];

      
      quote.votes += 1
      return [...state, quote]
    case 'DOWNVOTE_QUOTE':

      idx = state.findIndex(quote => quote.id  === action.quoteId)
      quote = state.find(quote => quote.id  === action.quoteId)
      state = [...state.slice(0, idx), ...state.slice(idx + 1)];


      
      if (quote.votes > 0){
        quote.votes -= 1
      }
      return [...state, quote]

    default:
      return state;
  }

  return state;
}
