import {connect} from 'react-redux'
import Login from "./components/user/Login"
import Regiser from "./components/user/Register";
import NavBar from "./components/nav/Navbar";
import CreateInvite from './components/invites/CreateInvite';
import Invites from './components/invites/Invites';
import Invite from './components/invites/Invite';
import UpdateInvite from './components/invites/UpdateInvite';
import Friends from './components/friendship/Friends';
import Home from './components/home/Home';
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  return (
       <Router>
           <div className="container">
               <NavBar/>
               <Switch>
                   <Route exact path="/">
                       <Home/>
                   </Route>
                   <Route exact path='/login' >
                       <Login/>
                   </Route>
                   <Route exact path='/register' >
                       <Regiser/>
                   </Route>
                   <Route exact path='/NewInvtaion' render={props => <UpdateInvite {...props}/>} />

                   <Route exact path='/invtaions'>
                       <Invites/>
                   </Route>
                   <Route exact path="/friendships">
                       <Friends/>
                   </Route>
                   <Route exact path='/invite/:id' render={props => <Invite {...props}/>}/>
                   <Route exact path='/invite/:id/edit' render={props => <UpdateInvite {...props}/>}/>
               </Switch>
           </div>
    </Router>

  );
}

export default App;
