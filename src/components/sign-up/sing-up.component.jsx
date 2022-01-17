import React, { Component } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, createUserProfileDocument} from "../firebase/firebase.utils";
import './sign-up.styles.scss';

class SingUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email: '',
             password: '',
             confirmPassword: ''
        }
    }
    
    handleSubmit= async (e)=>{
      e.preventDefault();
      const { email, password, displayName, confirmPassword } = this.state;
      
      if(password !== confirmPassword){
        alert("password not match")
        return;
    }

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        user.displayName = displayName;

        await createUserProfileDocument(user, {displayName})
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
       }

    }
    catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            // auth/email-already-in-use 
            // i should to handle error if user is exist in firebase
          };
    }


    
    handleChange=(e)=>{
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })

    }
  
    render() {
        const { email, password, displayName, confirmPassword } = this.state
        return (
            <div className="sing-up">
            <h2 className="h2">I dont have an account</h2>
            <span>Sing up with email and password</span>
                <form onSubmit={this.handleSubmit} >
                <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            handleChange={this.handleChange}
                            required
                            label="displayName"
                        />
               <FormInput
                            type="email"
                            name="email"
                            value={email}
                            handleChange={this.handleChange}
                            required
                            label="email"
                        />
                <FormInput
                            type="password"
                            name="password"
                            value={password}
                            handleChange={this.handleChange}
                            required
                            label="password"
                        />  
                 <FormInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            handleChange={this.handleChange}
                            required
                            label="confirm password"
                        />  
                    <CustomButton type="submit" >SING UP</CustomButton>
                </form>  
            </div>
        )
}
}

export default SingUp;
