import React from 'react'
import PropTypes from 'prop-types'

const header = ({text, caption}) => {
  return (
    <header>
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'blue'
        }}>
            <div>
                <h1 style={{ color: '#fff' }}>{text}</h1>
                <h2  style={{ color: '#fff' }}>{caption}</h2>
            </div>
            <div>
                
            </div>
        </div>
    </header>
  )
}

header.propTypes = {
    text: PropTypes.string.isRequired,
    caption: PropTypes.string,
}

header.defaultProps = {
    caption: 'No Caption'
}

export default header
