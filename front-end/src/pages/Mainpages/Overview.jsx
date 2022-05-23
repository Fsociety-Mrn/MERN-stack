import { Grid } from '@mui/material'
import React from 'react'

const Overview = () => {
  return (
    <div>
            <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingLeft={3}
      paddingRight={2}
      paddingY={1}
      style={{ minHeight: "100%" }}
      >
        <h1>
            Hello Friends
        </h1>
      </Grid>

    </div>
  )
}

export default Overview