import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>

    </div>
  );
}

export default App;
