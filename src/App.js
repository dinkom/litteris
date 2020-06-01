import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Orders from './components/orders';
import About from './components/about';
import Announcements from './components/announcements';
import Books from './components/books';
import Book from './components/book';
import Actions from './components/actions';
import Recommendations from './components/recommendations';
import Search from './components/search';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/knjige/" component={Books} />
          <Route exact path="/knjige/:slug/" component={Book} />
          <Route exact path="/akcije/" component={Actions} />
          <Route exact path="/preporuke/" component={Recommendations} />
          <Route path="/u-pripremi/" component={Announcements} />
          <Route exact path="/narudzbe/" component={Orders} />
          <Route path="/o-nama-kontakt/" component={About} />
          <Route path="/pretraga/" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
