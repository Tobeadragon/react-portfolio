import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';



function App() {
  return (
   <Router>
        <div className="App">
         <header>
           <Navbar/>
           
         </header>
         <main>
         <Switch>
        {/* Umleitung von '/' zu '/todo' */}

        <Route exact path='/'><Home /></Route>
        <Route path='/About'> <About /></Route>
        <Route path='/Skills'><Skills /></Route>
        <Route path='/Hobbies'><Hobbies /></Route>
        <Route path='/Contact'><Contact /></Route>
        {/* Alternative Schreibweisen:
        <Route path='/hilfe' component={Hilfe} />
        <Route path='/hilfe' children={Hilfe} /> */}
        <Route path='*'><NotFound/></Route>

      </Switch>
         
         </main>
         <Footer />
        </div>
        
        
        </Router>   
  );
}

export default App;
