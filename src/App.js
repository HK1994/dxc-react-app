import React, { Component, Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header'

const AsyncHome = lazy(() =>  import('./screens/home'))
const AsyncSettings = lazy(() =>  import('./screens/settings'))
const AsyncDetails = lazy(() =>  import('./screens/details'))

class App extends Component {
  state = {
    headerText: "My ToDo Application",
    caption: "Give me your task",
    todo: "",
    task:""
  }
  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {headerText, caption, todo, task} = this.state;
    return (
      <Fragment>
        <Header text={headerText} caption={caption} />
        <section>
          <Router>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                  <Route path="/" exact component={() => <AsyncHome />} />
                  <Route path="/settings/" component={() => <AsyncSettings />} />
                  <Route path="/details/" component={() => <AsyncDetails />} />
                </Switch>
              </Suspense>
          </Router>
          

        </section>
      </Fragment>
    );
  }
}

export default App;
