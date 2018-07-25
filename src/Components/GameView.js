import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, TextField, Icon } from '@material-ui/core/';
import getSuggestions from '../api/getSuggestions';
import $ from 'jquery';
import fetchJsonp from 'fetch-jsonp';

const term = "can i haz ";
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
        {this.state.answers.buttons}
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
              Eliminate bottom 2
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
