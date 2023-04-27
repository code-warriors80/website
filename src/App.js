import './App.css';
import Boost from './Components/Boost';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Reason from './Components/Reasons';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Reason />
        < Boost />
        <Footer />
    </div>
  );
}

export default App;
