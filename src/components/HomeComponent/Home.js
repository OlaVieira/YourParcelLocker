import './Home.css'
import {Button} from "../Button/Button";

export const Home = () => {
    return (
        <div className="Home">
            <h2 className="HelloMessage">Hello!</h2>
            <Button/>
            <i className="Arrow fa-solid fa-arrow-up"></i>
        </div>

    );
}
