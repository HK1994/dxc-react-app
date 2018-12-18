import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { ThemeConsumer } from './contex/themeContex';

const header = ({text, caption}) => {
  return (
      <ThemeConsumer>
    {(themeContex) => <header>
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
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={{ color: '#fff'}}>Home</Link>
                    </li>
                <li>
                    <Link to="/details/"  style={{ color: '#fff'}}>Details</Link>
                </li>
                    <li>
                        <Link to="/settings/"  style={{ color: '#fff'}}>Setting</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={themeContex.changeTheme}>Change Theme</button>
        </div>
    </header>}
    </ThemeConsumer>
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
