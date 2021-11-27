import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './Pages/Aboutus/Aboutus';
import Provide from './Pages/Provide/Provide';
import Login from './Pages/LogIn/Login';
import AuthProvider from './Context/AuthProvider';
import Services from './Pages/Services/Services';
import Appiontment from './Pages/Appiontment/Appiontment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Contactus from './Pages/Contactus/Contactus';


function App() {
  return (
    <div>
      <AuthProvider>
          <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
            <Home></Home>
              <Provide></Provide>
              <Services></Services>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Provide></Provide>
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>
            <PrivateRoute path="/appiontment/:appiontmentId">
              <Appiontment></Appiontment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
