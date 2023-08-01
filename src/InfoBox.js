import { Card,CardContent, Typography } from '@mui/material'
import React from 'react'
import './InfoBox.css'
function InfoBox({title,cases,total,...props}) {
  return (
    <Card onClick={props.onClick} className={`infoBox ${props.active && "infoBox--selected"} ${props.isRed && "infoBox--red"}`}>
        <CardContent>
            <Typography color="textSecondary">
                {title}
            </Typography>
            <h2 className={`infoBox_cases ${!props.isRed && "infoBox_cases--green"}`}>{cases}</h2>
            <Typography className='infoBox_total'>
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox
