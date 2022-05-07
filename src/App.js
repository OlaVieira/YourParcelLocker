import './App.css';
import {ParcelLockerH1} from "./components/PacelLockerH1Component/ParcelLockerH1";
import {Home} from "./components/HomeComponent/Home";

export const App = () => {
  return (
    <div className="App">
      <ParcelLockerH1/>
      <Home/>
    </div>
  );
}

