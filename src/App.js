import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import { onSnapshot } from "firebase/firestore";

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null

    }
  }
  unsubscribefromauth = null;

  componentDidMount() {
    this.unsubscribefromauth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
         onSnapshot(userRef , snapShot =>{
           this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
         
      }
      else{
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribefromauth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>

      </div>
    );
  }
}

export default App;
