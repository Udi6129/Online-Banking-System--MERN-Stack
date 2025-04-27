import { BrowserRouter,Routes,Route } from 'react-router-dom';
 
import './App.css';
 import Navbar from './component/Navbar';
import Home from './component/Home';
import CreateAccount from './component/CreateAccount';
import About from './component/About';
import Deposit from './component/Deposit';
import FundTransfer from './component/FundTransfer';
import Contact from './component/Contact';
import Withdraw from './component/Withdraw';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/CreateAccount' element={<CreateAccount/>}/>
     <Route path='/Withdraw' element={<Withdraw/>}/>
     <Route path='/Deposit' element={<Deposit/>}/>
     <Route path='/FundTransfer' element={<FundTransfer/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
