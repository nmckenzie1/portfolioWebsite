import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/Theme'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Resume from './ui/Resume'


import "./App.css";
import Home from './ui/Home';
import Portfolio from './ui/Portfolio';
import About from './ui/About';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/portfolio' component={Portfolio} />
         <Route exact path='/resume' component={Resume} />

        </Switch>
        <Footer/>
     </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
