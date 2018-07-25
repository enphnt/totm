
import React from 'react'
import { Button } from '@material-ui/core/';

const buttonSecondaryStyle = {
  width: "30%",
  lineHeight: "1.5em",
  fontSize: ".7em",
  margin: "5px",
};

const ButtonPass = () => {
  return (
    <Button variant="raised" color="secondary" style={buttonSecondaryStyle} >
      <h2> Pass </h2>
      <div style={{ paddingLeft: 25 }}>
        use a new phrase
              <br />
        ( 3 / 3 )
             </div>
    </Button>
  )
}

export default ButtonPass;
