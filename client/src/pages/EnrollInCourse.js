import React , {useState} from "react";


import axios from "axios";
const EnrollInCourse = () => {
  let courses=[];
  let listItems;
  axios.get("http://localhost:4000/show-courses").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        courses = response.data
        
      }
    }); 
    if (courses.length > 0){
          
      listItems = courses.map((course) =>
        <option key={course.ders_id}>
          {course.dil}
        </option>
      );
      console.log(listItems)
    }
  const [citizenId, setId] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    const data={
      citizenId: citizenId,
    }
    console.log(data);
    axios.post("http://localhost:4000/", data).then((response) => {
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
            <select name="courses" id="courses" className="selectpicker" multiple required>
              {listItems}
            </select>
            <select class="form-select" aria-label="Default select example" required>
              <option hidden>Ödeme Yöntemi Seçin</option>
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