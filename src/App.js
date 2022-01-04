import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
