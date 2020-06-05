import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
      content: '',
      author: ''
  }

  handleOnContentChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  handleOnAuthorChange = event => {
    
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    // Handle Form Submit event default
    // Create quote object from state
    let quote = this.state
    quote.id = uuid()
    this.props.addQuote(quote)
    // Pass quote object to action creator
    // Update component state to return to default state
    this.setState({
      author: '',
      content: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea name = "content"
                        className="form-control"
                        value={this.state.content}
                        onChange = {this.handleOnContentChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange = {this.handleOnAuthorChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default" onClick = {this.handleOnSubmit}>Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addQuote: (quote) =>{
      dispatch(addQuote(quote))
    }
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
