import './App.css';
import ListAll from './components/ListAll';
import Edit from './components/Edit';
import Details from './components/Details';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';
import Success from './components/Success';
import {BrowserRouter as RouterB, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddPet from './components/AddPet';


function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
    
      <RouterB>
        <Navbar />
        <Switch>
          <Route path="/pet/:id/edit" component={Edit}/>
          <Route path="/pet/:id/payment" component={StripeContainer} />
          <Route path="/pet/success" component={Success} />
          <Route path='/pet/contact' exact component={Contact} />
          <Route path='/pet/about' component={About} />
          <Route path='/pet/addpet' component={AddPet} /> 
          <Route path="/pet/:id" component={Details}/>
          <Route path="/pet" component={ListAll} />
          <Route path='/' exact component={Home} />
        </Switch> 
      </RouterB>
      {/* <Router>
        <ListAll path="/pet" />
        <Edit path="/pet/:id/edit" />
        <Details path="/pet/:id" />
        <StripeContainer path="/pet/:id/payment"/>
        <Success path="/pet/success" />
      </Router> */}
    </div>
  );
}

export default App;
