import { Route, Routes,Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homes from "./components/Homes/Homes";
import Navbar from "./components/Navbar/Navbar";
import Course from "./components/Course/Course";
import Signup from "./components/Signup/Signup";
import Contact from "./components/Contact/Contact";
import {Toaster} from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {

const [authUser,setAuthUser] = useAuth();
console.log(authUser);

  return (<>
<Navbar/>
<Routes>
<Route path="/" element={<Homes/>}/>
<Route path="/course" element={authUser?<Course/>:<Navigate to='/signup'/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path='*' element={<Navigate to='/'/>}/>
</Routes>
<Toaster />
<Footer/>
 </>);
}

export default App;
