import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  removeQuote = (quoteId) => {
    this.props.removeQuote(quoteId)
  }

  upVote = (quoteId) => {
    this.props.upvoteQuote(quoteId)
  }

  downVote = (quoteId) => {
    this.props.downvoteQuote(quoteId)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes*/
                this.props.quotes.map((quote, idx) => {
                  return <QuoteCard
                    key = {idx}
                    quote = {quote}
                    removeQuote = {this.removeQuote}
                    upVote = {this.upVote}
                    downVote = {this.downVote}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => { dispatch(removeQuote(quoteId)) },
    upvoteQuote: (quoteId) => { dispatch(upvoteQuote(quoteId)) },
    downvoteQuote: (quoteId) => { dispatch(downvoteQuote(quoteId)) }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
