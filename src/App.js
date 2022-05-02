import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import RequirAuth from './Components/RequirAuth/RequirAuth';
import AddPackage from './Components/Share/AddPackage/AddPackage';
import Details from './Components/Share/Details/Details';
import Footer from './Components/Share/Footer/Footer';
import Header from './Components/Share/Header/Header';
import Login from './Components/Share/Login/Login';
import ManageItem from './Components/Share/ManageItem/ManageItem';
import Item from './Components/Share/MyItems/Item/Item';
import MyItems from './Components/Share/MyItems/MyItems';
import NoteFound from './Components/Share/NoteFound/NoteFound';
import SignUp from './Components/Share/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<RequirAuth><Blogs></Blogs></RequirAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
       <Route path='/details/:servicesId' element={<Details></Details>}></Route>
       <Route path='/myitems' element={<MyItems></MyItems>}></Route>
       <Route path='/item' element={<Item></Item>}></Route>
       <Route path='/addpackage' element={<AddPackage></AddPackage>}></Route>
       <Route path='*' element={<NoteFound></NoteFound>}></Route>
     </Routes>
     <Footer></Footer>

    </div>
  );
}

export default App;
