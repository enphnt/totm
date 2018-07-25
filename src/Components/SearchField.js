
import React from 'react'
import { TextField } from '@material-ui/core/';
import $ from 'jquery';

const SearchField = () => {
  return (
    <div className="search-term">
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
      />
    </div>
  )
}

export default SearchField;
