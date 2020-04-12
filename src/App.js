import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import First from './components/First';
import { Layout } from './layout/Layout';
import { Header } from './layout/Header';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <First />
          <Layout>
            <Switch>
              <Route exact path='/' component={First}></Route>
              {/* <Route exact path='/about' component={About}></Route>
            <Route exact path='/Admin' component={Admin}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route component={NotFound} /> */}
            </Switch>
          </Layout>
          <Header />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
