import React, { Component, createContext } from 'react'

export const { Consumer: ThemeConsumer, Provider} = createContext();

export class ThemeProvider extends Component {
    state = {
        value: 'light',
        changeTheme: () => this.changeTheme()
    };

    changeTheme = () => {
        console.log('changeTheme')
        this.setState((state) => { return { value: state.value === 'light' ? 'dark' : 'light' }})
    };

  render() {
    const {children} = this.props;
    
    return (
      <Provider value={this.state}>
        {children}
      </Provider>
    )
  }
}
