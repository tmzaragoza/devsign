import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Landing from '../landing/Landing';
import NotificationsContainer from '../../containers/NotificationsContainer';
import Profile from '../profile/Profile';
import MessagesContainer from '../../containers/MessagesContainer';
import style from './Header.css';
import { withSession } from '../../containers/auth/withSession';
import Callback from '../../containers/auth/Callback';

export default function Header() {
  return (
    <Router>
      <div styles={style.header}>
        <header>
          <h1>rettiwT</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/messages'>Messages</Link>
            <Link to='/notifications'>Notifications</Link>
            <Link to='/profile'>Profile</Link>
            <input type="text" placeholder='search'/>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/notifications' component={withSession(NotificationsContainer)} />
          <Route exact path='/profile' component={withSession(Profile)} />
          <Route exact path='/messages' component={withSession(MessagesContainer)} />
          <Route exact path='/callback' component={Callback} />
        </Switch>
      </div>
    </Router>
  );
}
