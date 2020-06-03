import uuid from "uuid";

const id = uuid();

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter((quote) => {
        return quote.id !== action.quoteId;
      });

    case "UPVOTE_QUOTE":
      for (let quote of state) {
        if (quote.id === action.quoteId) {
          quote.votes += 1;
        }
      }
      return state;

    case "DOWNVOTE_QUOTE":
      for (let quote of state) {
        if (quote.id === action.quoteId) {
          if (quote.votes === 0) {
          } else {
            quote.votes -= 1;
          }
        }
      }
      return state;

    default:
      return state;
  }
};
