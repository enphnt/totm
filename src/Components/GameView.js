import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, TextField } from '@material-ui/core/';
import getSuggestions from '../api/getSuggestions';
import $ from 'jquery';
import fetchJsonp from 'fetch-jsonp';

const term = "when do i know if ";
const buttonStyle = {
  width: "90%",
  lineHeight: "1.5em",
  fontSize: ".8em",
  margin: "2px",
};

const buttonSecondaryStyle = {
  width: "30%",
  lineHeight: "1.5em",
  fontSize: ".7em",
  margin: "5px",
};

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
    fetchJsonp(`https://suggestqueries.google.com/complete/search?client=chrome&q=${this.state.term}`)
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
              <div key={answer}>
                <Button
                  variant="raised"
                  color="primary"
                  style={buttonStyle}>
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

      <div className="GameView">
        <div className="search-term">
          <TextField
            {...$('search-term')}
            className="search-term"
            floatinglabeltext={this.state.term}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="type your phrase here..."
            helperText="then guess which result below is the most popular google search "
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <h2>{this.state.term}...</h2>
        </div>
        {this.state.answerButtons}
        <div style={{ margin: "5px" }}>
          <Button variant="raised" color="secondary" style={buttonSecondaryStyle}>
            <h2>50/50</h2>
            <div style={{ paddingLeft: 25 }}>
              show worst vs best
              <br />
              ( 3 / 3 )
            </div>
          </Button>
          <Button variant="raised" color="secondary" style={buttonSecondaryStyle}>
            <h2> Pass </h2>
            <div style={{ paddingLeft: 25 }}>
              use a new phrase
              <br />
              ( 3 / 3 )
             </div>
          </Button>
          <Button variant="raised" color="secondary" style={buttonSecondaryStyle} >
            <h2> Drop </h2>
            <div style={{ paddingLeft: 25 }}>
              Eliminate bottom 4
              <br />
              ( 3 / 3 )
            </div>
          </Button>
        </div>
      </div >
    );
  }
}
export default GameView;
