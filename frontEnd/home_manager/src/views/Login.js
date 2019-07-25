// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class LoginPage extends Component {
    state = {
        userName: undefined,
        pw: undefined,
    }
    
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

                <div className='registerForm'>
                    <form onSubmit={this.registerSubmit}>
                        <input
                            id='userName'
                            type='text'
                            placeholder='First Name'
                            onChange={this.inputChange}
                        ></input>
                        <input
                            id='pw'
                            type='text'
                            placeholder='Last Name'
                            onChange={this.inputChange}
                        ></input>
                        <button>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // -- Methods -- //
    inputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    registerSubmit = e => {

    }
}

export default LoginPage;