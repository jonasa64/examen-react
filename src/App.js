import Login from "./components/user/Login"
import Regiser from "./components/user/Register";
import NavBar from "./components/nav/Navbar";
import CreateInvite from './components/invites/CreateInvite';
import Invites from './components/invites/Invites';
import Invite from './components/invites/Invite';
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <NavBar/>
       <Switch>
           <Route exact path='/login' >
            <Login/>
           </Route>
           <Route exact path='/register' >
               <Regiser/>
           </Route>
           <Route exact path='/NewInvtaion'>
               <CreateInvite/>
           </Route>
           <Route exact path='/invtaions'>
               <Invites/>
           </Route>
           <Route path='/invite/:id' render={props => <Invite {...props}/>}/>
       </Switch>
    </Router>

  );
}

export default App;
