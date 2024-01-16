import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function StudentCreate(){

    const [student, setStudent] = useState({
        name: '',
            email: '',
            phone: '',
            course: ''
        
        });

        const handleInput = (e) => {
            e.persist();
            setStudent({...student, [e.target.name]: e.target.value});
        }

        const saveStudent=(e)=> {
e.preventDefault();
const data ={
    name:student.name,
    email:student.email,
    phone:student.phone,
    course:student.course,
}
axios.post(`http://127.0.0.1:8000/api/students`,data).then(res=>{
  alert(res.data.message);
        })
        .catch(function (error)
        {
          if(error.response){
        
        }
        });
        }
return(






    <div>
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Add Student 
                <Link to="/students" className="btn btn-danger float-end">
                    Back</Link>
              </h4>
              </div>
              <div className="card-body">

                <form onSubmit={saveStudent}>
                    <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label>Email</label>
                    <input type="text" name="email" value={student.email} onChange={handleInput}className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label>Phone</label>
                    <input type="number" name="Phone" value={student.phone} onChange={handleInput}className="form-control"></input>
                    </div>

                    <div className="mb-3">
                    <label>Course</label>
                    <input type="text" name="Course" value={student.course} onChange={handleInput}className="form-control"></input>
                    </div>

                    <div className="mb-3">
                  
                    <button type="submit" className="btn btn-primary">Save Student</button>
                    </div>

                </form>
              </div>
              
    </div>
    </div>
    </div>
    </div>
    </div>
)
 }
 export default StudentCreate;