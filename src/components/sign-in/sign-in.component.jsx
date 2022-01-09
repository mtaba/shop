import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <div className="sign-in">
                    <form onSubmit={this.handleSubmit}>
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
                        <div className="buttons">
                            <CustomButton type="submit" >Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                Sign in with Google
                            </CustomButton>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;