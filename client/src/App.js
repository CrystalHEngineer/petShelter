import './App.css';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Details from './components/Details';
import {Router} from '@reach/router';
import './App.css';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';
import Success from './components/Success';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
    <Router>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pet/contact' component={Contact} />
        <Route path='/pet/about' component={About} />
      </Switch>
      <ListAll path="/pet" />
      <New path="/pet/new" />
      <Edit path="/pet/:id/edit" />
      <Details path="/pet/:id" />
      <StripeContainer path="/pet/:id/payment"/>
      <Success path="/pet/success" />
    </BrowserRouter>
    </Router>
    </div>
  );
}

export default App;
