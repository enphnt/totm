import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, TextField } from '@material-ui/core/';
import getSuggestions from '../api/getSuggestions';
import $ from 'jquery';

const term = "how do i tell my ";


class GameView extends Component {
  constructor() {
    super();
    this.state = {
      answerOptions: [],
      answerButtons: [],
      term: term,
    };
  }

  getAnswerOptions() {
    fetch(
      `https://suggestqueries.google.com/complete/search?client=chrome&q=${this.state.term}`,
      {
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const fuzzinessThreshold = 0.68;
        const shortenedTerm = term.substring(0, (term.length - 1) * fuzzinessThreshold)
        const termRegexp = new RegExp(shortenedTerm, "g");
        const suggestions = data[1];
        const matchingSuggestions = suggestions
          .filter(suggestion => suggestion.match(termRegexp));

        this.setState({ answerOptions: matchingSuggestions })

        this.setState({
          answerButtons: matchingSuggestions.map((answer) => {
            return (
              <div key={answer} style={{ width: "100%" }}>
                <Divider />
                <Button variant="raised" color="primary" style={{ width: "80%", lineHeight: "40px" }}>
                  {answer}
                </Button>
              </div>
            );
          })
        });

        console.log("shortenedTerm", shortenedTerm);
        console.log("suggestions", suggestions);
      });
  }
  componentWillMount() {
    this.getAnswerOptions(term)
  }

  render() {
    return (

      <div>
        <TextField {...$('search-term')} floatingLabelText="when can i know " />
        <div>
          <h2>{this.state.term}</h2>
        </div>
        {this.state.answerButtons}
        <Button variant="raised" color="secondary">
          <h2> 50 / 50 </h2>
          <div style={{ paddingLeft: 10 }}>
            (Only worst and best answers)
          <br />
            ( 3 / 3 )
          </div>
        </Button>
        <Button variant="raised" color="secondary">
          <h2> Pass </h2>
          <div style={{ paddingLeft: 10 }}>
            Refresh for new Question
          <br />
            ( 3 / 3 )
          </div>
        </Button>
        <Button variant="raised" color="secondary">
          <h2> Drop </h2>
          <div style={{ paddingLeft: 10 }}>
            Eliminate bottom 4
          <br />
            ( 3 / 3 )
          </div>
        </Button>
      </div>
    );
  }
}
export default GameView;
