import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Form, Col, Row, Button, FormText } from 'react-bootstrap';


    





const loginUser = async (e) => {
    e.preventDefault();
    console.log("create a new user", userData);
    const newUser = await userService.signUp(userData);
    console.log(newUser);
};

export default function LogIn() {
    const [userData, setUserData] = useState({});
    return (


        <div className="login-outer">
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="name">
                    <h2>Login</h2>
                    <div>
                        <Form.Label>Username: <input type='text' name="username" value={userData.username}></input>
                        </Form.Label>
                    </div>
                    <div>
                        <Form.Label>Password: <input type='password' name="password" value={userData.password} ></input>
                        </Form.Label>
                    </div>
                </Form.Group>
            </Form>
            <button type="submit" className="btn-login">
                <Link to='organization' className="login-links">Log in as Organization</Link>
            </button>

            <button type="submit" className="btn-login">
                <Link to='member' className="login-links" >Log in as Member</Link>
            </button>
        </div>
    );
}

//value={userData.username} onChange={handleChange}
//value={userData.password} onChange={handleChange}