
import React from 'react'
import { Button } from '@material-ui/core/';

const buttonSecondaryStyle = {
  width: "30%",
  lineHeight: "1.5em",
  fontSize: ".7em",
  margin: "5px",
};

const ButtonDrop = () => {
  return (
    <Button variant="raised" color="secondary" style={buttonSecondaryStyle} >
      <h2> Drop </h2>
      <div style={{ paddingLeft: 25 }}>
        Eliminate bottom 2
        <br />
        ( 3 / 3 )
      </div>
    </Button>
  )
}

export default ButtonDrop;
