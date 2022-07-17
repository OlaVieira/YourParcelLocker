import './App.css';
import {ParcelLockerH1} from "./components/PacelLockerH1/ParcelLockerH1";
import {Home} from "./components/Home/Home";

export const App = () => {
  return (
    <div className="App">
      <ParcelLockerH1/>
      <Home/>
    </div>
  );
}

