
import React, { Component } from 'react'
import { TextField } from '@material-ui/core/';
import $ from 'jquery';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (

      <div className="search-term" >
        <TextField
          {...$('search-term')}
          className="search-term"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="type your phrase here..."
          helperText="then guess which result below is the most popular google search "
          fullWidth
          margin="normal"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
  onInputChange(term) {
    this.setState({ term });
    //this.props.onSearchTermChange(term);
  }
}

export default SearchField;
