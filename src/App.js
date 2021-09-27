import Hello from "./Component/Hello";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/Aboutus";
import Navbar from "./Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./User/AddUser";

import EditUser from "./User/EditUser";
import UserDetail from "./User/UserDetail";
import Help from "./Component/Help";
import Login from "./Component/Login";

function App() {
  return (
    <Router>
      <div className="App">


        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/User/add" component={AddUser} />
          <Route exact path="/User/edit/:id" component={EditUser} />
          <Route exact path="/User/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
