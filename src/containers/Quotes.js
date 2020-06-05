import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map(q => <QuoteCard 
      key={q.id}
      id={q.id}
      quote={q}
      remove={(id) => this.props.removeQuote(id)}
      upVote={(id) => this.props.upvoteQuote(id)}
      downVote={(id) => this.props.downvoteQuote(id)}
      /> )
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
