import { Button } from '@mui/material'
import React from 'react'

function ButtonCustom(props) {
  return (
    <div><Button
    variant="contained"
    color="primary"
    onClick={props.onClick}
  >
    {props.title}
  </Button>
  </div>
  )
}

export default ButtonCustom