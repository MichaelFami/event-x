import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function LogIn () {
    return (
        <div className="user-outer">
                <Button variant="light" type="submit">
                    <Link to='organization' >Log in as Organization</Link>
                </Button>

                <Button variant="light" type="submit">
                    <Link to='member' >Log in as Member</Link>
                </Button>
        </div>
    )
}