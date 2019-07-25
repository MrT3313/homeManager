// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class LoginPage extends Component {
    render() {
        return (
            <div className="Container">
                <h1>Login Page</h1>
                <div className="DummyNav">
                    <h1>Landing Page</h1>
                    <Link to="/">Landing Page</Link>
                    <br />

                    <Link to="/login">Login Page</Link>
                    <br />

                    <Link to="/register">Register Page</Link>
                    <br />
                </div>
            </div>
        );
    }
}

export default LoginPage;