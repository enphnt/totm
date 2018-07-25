
import React from 'react'
import { Button } from '@material-ui/core/';

const buttonSecondaryStyle = {
  width: "30%",
  lineHeight: "1.5em",
  fontSize: ".7em",
  margin: "5px",
};

const Button5050 = () => {
  return (
    <Button variant="raised" color="secondary" style={buttonSecondaryStyle} >
      <h2>50/50</h2>
      <div style={{ paddingLeft: 25 }}>
        show worst vs best
        <br />
        ( 3 / 3 )
      </div>
    </Button>
  )
}

export default Button5050;
