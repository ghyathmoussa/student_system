import React , {useState} from "react";


import axios from "axios";
const EnrollInCourse = () => {
  const [citizenId, setId] = useState([]);
  
  const submitHandler = (e) =>{
    e.preventDefault();
    const data={
      citizenId: citizenId,
    }
    console.log(data);
    axios.post("http://localhost:4000/register-student", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data)
        window.location.href = `http://localhost:3000/mainPage`;
      }
    });
  }

  return (
    <div>
      <div className="EnrollInCourse">
      <button id="backButton" type="button" class="btn btn-primary btn-lg">Geri</button>
        <form  id="enrollForm" onSubmit={submitHandler}>
            <input type="text" className="myinput" required placeholder="T.C. No." onChange = { e => setId(e.target.value)}/>
            <select name="courses" id="courses" className="selectpicker" multiple>
              <option>dil/kurs adı/... </option>
              <option>dil/kurs adı/... </option>
              <option>dil/kurs adı/... </option>
              <option>dil/kurs adı/... </option>
              <option>dil/kurs adı/... </option>
              <option>dil/kurs adı/... </option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected hidden>Ödeme Yöntemi Seçin</option>
              <option value="Peşin">Peşin</option>
              <option value="Taksit">Taksit</option>
            </select>
            <input id="enrollButton" type="submit"  value="Kaydet" className="btn btn-primary mybtn" />
        </form>
      </div>
    </div>
  )
  
};

export default EnrollInCourse;