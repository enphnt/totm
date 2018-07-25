import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, TextField, Icon } from '@material-ui/core/';
import getSuggestions from '../api/getSuggestions';
import fetchJsonp from 'fetch-jsonp';
import Button5050 from './Button5050';
import ButtonDrop from './ButtonDrop';
import ButtonPass from './ButtonPass';
import SearchField from './SearchField';

const term = "can i haz ";
const buttonStyle = {
  width: "95%",
  lineHeight: "1.5em",
  fontSize: ".8em",
  margin: "4px",
};

class GameView extends Component {
  constructor() {
    super();
    this.state = {
      answers: {
        top: [],
        buttons: [],
      },
      term: term,
    };
  }

  getAnswerOptions() {
    fetchJsonp(`https://suggestqueries.google.com/complete/search?client=chrome&q=${this.state.term}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const suggestionsRaw = data[1];
        console.log(data);

        // note: the suggestions array is received in ranked order
        //       and we filter out suggestions starting with http to
        //       remove direct URL suggestions
        const suggestions = suggestionsRaw
          .filter(suggestion => suggestion.indexOf("http"));

        if (suggestions.length > 5) {
          const suggestionsTrimmed = suggestions.slice(0, 5);

          this.setState({
            answers: {
              top: suggestionsTrimmed,
              buttons: suggestionsTrimmed.map((answer) => {
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
            }
          });
        } else {
          this.setState({
            answers: {
              buttons:
                <div>
                  <Button
                    variant="raised"
                    color="disabled"
                    style={buttonStyle}>
                    <Icon>!</Icon>
                    Sorry, the phrase doesn't have enough related searches. Try another phrase.
                  </Button>
                </div>
            }
          });
        }
      })
      .catch(err => {
        console.log('parsing failed', err)
      });
  }
  componentDidMount() {
    this.getAnswerOptions(term)
  }

  render() {
    return (
      <div className="GameView">
        <Button variant="extendedFab" aria-label="Delete">
          <Icon>🕵️‍♂️ </Icon>
          <div style={{ padding: "5px" }}>
            Get a phrase!
          </div>
        </Button>
        <div>
          <h4>or</h4>
        </div>
        <SearchField />
        <div>
          <h2>{this.state.term}...</h2>
        </div>
        {this.state.answers.buttons}
        <Button5050 />
        <ButtonPass />
        <ButtonDrop />
      </div >
    );
  }
}
export default GameView;
