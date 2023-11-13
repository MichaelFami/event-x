import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function LogIn () {

    





    return (
        <div className="login-outer">
                <button type="submit" className="btn-login">
                    <Link to='organization' className="login-links">Log in as Organization</Link>
                </button>

                <button type="submit" className="btn-login">
                    <Link to='member'className="login-links" >Log in as Member</Link>
                </button>
        </div>
    )
}