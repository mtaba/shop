import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router';
import { onSnapshot } from "firebase/firestore";
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";
import './App.css';

class App extends Component {
 
  unsubscribefromauth = null;

  componentDidMount() {
    const  { setCurrentUser } = this.props;
    this.unsubscribefromauth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
         onSnapshot(userRef , snapShot =>{
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }
      else{
        setCurrentUser( userAuth );
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribefromauth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" 
            render={()=>this.props.currentUser ? (<Redirect  to="/" />) : (<SignInAndSignUp />)
          } />

        </Switch>

      </div>
    );
  }
}

const mapStateToProps= ({user})=>({
 currentUser: user.currentUser
})

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser : user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
