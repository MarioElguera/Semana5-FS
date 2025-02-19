import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/user/5")}>UserId</button>
            <button onClick={() => navigate("/post/5")}>PostJson</button>
        </nav>
    );
}
