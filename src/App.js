import './App.css';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';
import SalesReport from './components/SalesReport/SalesReport';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline m-3">
        Mariam Shop
      </h1>
      <Pricing></Pricing>
      <SalesReport></SalesReport>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
