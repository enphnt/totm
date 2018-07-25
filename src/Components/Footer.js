
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

var currentYear = (new Date()).getFullYear();

const Footer = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className="App-footer" variant="caption" color="inherit">
            &copy; T . o . t . M ({currentYear})
            <br />
            Nathan Phennel & Habib Adam
                </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer;
