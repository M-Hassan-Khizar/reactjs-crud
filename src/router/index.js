import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import StudentList from "../pages/Student.js";
import StudentCreate from "../pages/StudentCreate.js";
import StudentEdit from "../pages/StudentEdit.js";


function MyRouter(){
return(
<Routes>

<Route path="/" element={<Home />} />
<Route path="/about-us" element={<About />} />
<Route path="/contact-us" element={<Contact />} />

<Route path="/students" element={<StudentList />} />
<Route path="/students/create" element={<StudentCreate />} />

<Route path="/students/:id/edit" element={<StudentEdit />} />


</Routes>
)
}
export default MyRouter;