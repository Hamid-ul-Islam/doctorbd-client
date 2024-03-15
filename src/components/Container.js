import React from 'react'

const Container = ({ children }) => {
  const style = {
    margin: '0 auto', // Center the app on the page
    overflow: 'auto', // Enable scroll if content overflows
    position: 'relative'
  }

  return <div className="container" style={style}>{children}</div>
}

export default Container