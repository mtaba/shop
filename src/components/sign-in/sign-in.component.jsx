import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
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
                            required="required"
                            labelText="email"
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            handleChange={this.handleChange}
                            required="required"
                            labelText="password"
                        />
                        <label>Password</label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;