import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Us from './pages/Us';
import Members from './pages/Members';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/quem-somos' component={Us} />
    <Route exact path='/membros' component={Members} />
    <Route exact path='/projetos' component={Projects} />
    <Route exact path='/contato' component={Contact} />
  </Switch>
);

export default Routes;