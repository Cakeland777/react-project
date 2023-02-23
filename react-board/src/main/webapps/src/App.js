import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import ListBoard from './components/ListBoard';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoard from './components/CreateBoard';
import ReadBoard from './components/ReadBoard';
import UpdateBoard from './components/UpdateBoard';
import CreateMember from './components/CreateMember';
import Login from './components/Login';
import MyPage from "./components/MyPage";
import Help from './Help';
import Home from './Home';

function App() {
  return (
    <div> 
    <Router>
      <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route path = "/" exact element={<Home />}></Route>
            <Route path = "/mypage/:userid" exact element={<MyPage />}></Route>
            <Route path = "/help" exact element={<Help />}></Route>
            <Route path = "/login" exact element={<Login />}></Route>
            <Route path = "/createmember" element = {<CreateMember/>}></Route>
            <Route path = "/board" element = {<ListBoard/>}></Route>
            <Route path = "/createboard" element = {<CreateBoard/>}></Route>
            <Route path = "/readboard/:no" element = {<ReadBoard/>}></Route>
            <Route path = "/updateboard/:no" element = {<UpdateBoard/>}></Route>



          </Routes>
        </div>
     
    </Router>
  </div>


  );
}

export default App;
