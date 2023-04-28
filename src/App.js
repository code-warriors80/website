import './App.css';
import Boost from './Components/Boost';
import Footer from './Components/Footer';
import Hire from './Components/Hire';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Reason from './Components/Reasons';
import About from './Components/About';
import Service from './Components/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Landing />
        <Reason />
        <Boost />
        <About />
        <Service />
        <Hire />
        <Footer />
    </div>
  );
}

export default App;
