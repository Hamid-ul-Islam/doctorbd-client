import React from 'react'

const Container = ({children}) => {
  const style = {
    width: '1300px', // Set the width you want here
    margin: '0 auto', // Center the app on the page
    overflow: 'auto', // Enable scroll if content overflows
    position:'relative'
  }

  return <div style={style}>{children}</div>
}

export default Container