import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Alluser/Dashboard';
import Home from './Components/Home/Home';
import Adduser from './Components/Adduser/Adduser';
import Edituser from './Components/Edituser/Edituser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router>
      
      <ToastContainer/>
      <Nav/>
      <Switch>
      
      <Route exact path='/'>
        
       <Home></Home>  
      </Route>
      <Route exact  path='/home'>
        
       <Home></Home>  
      </Route>
      
        <Route path="/dashboard" >
        <Dashboard>

        </Dashboard>

        </Route>
        <Route path="/adduser" >
        <Adduser>
          </Adduser>

        </Route>
        
        <Route path="/edituser/:userid" >
        <Edituser></Edituser>

        </Route>
        

          
      </Switch>  
      </Router>
    </div>
  );
}

export default App;
