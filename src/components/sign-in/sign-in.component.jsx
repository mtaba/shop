import React, { Component } from 'react'
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
                        <input type="email" name="email" value={email} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="password" name="userName" value={password} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;