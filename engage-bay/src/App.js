import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';

function App() {
  document.title="All-in-One CRM - Marketing, Sales & Support Software | EngageBay"
  return (
    <div style={{
      backgroundColor:"#F4EBE3"
    }} className="App">

{/* <Allroutes/> */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
