import React , {useState} from "react";
import {Link} from "react-router-dom"


import axios from "axios";
const DeleteStudent = () => {
  const [citizenId, setId] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    const data={
      citizenId:  citizenId,
    }
    console.log(data);
    axios.post("http://localhost:4000/", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data)
        window.location.href = `http://localhost:3000/`;
      }
    });
  }

  return (
    <div>
        <div className="deleteStudent">
        <Link to="/mainPage"><button id="backButton" type="button" class="btn btn-primary btn-lg">Geri</button></Link>
                <div className="deleteForm">
                <form  id="deleteForm" onSubmit={submitHandler}>
                    <input type="text" className="myinput" required placeholder="T.C. No." onChange = { e => setId(e.target.value)}/>
                    <input id="deleteButton" type="submit"  value="Sil" className="btn btn-primary mybtn" />
                </form>
            </div>
        </div>
    </div>
    
  )
  
};

export default DeleteStudent;