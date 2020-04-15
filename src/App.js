import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import First from './components/First';
import Home from './containers/Home';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Layout } from './layout/Layout';
import { UploadFile } from './containers/UploadFile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Layout>
            <Switch>
              <Route exact path='/about' component={First}></Route>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Upload' component={UploadFile}></Route>
              {/* <Route exact path='/Admin' component={Admin}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route component={NotFound} /> */}
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
