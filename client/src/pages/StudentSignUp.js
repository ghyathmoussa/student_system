import React , {useState} from "react";


import axios from "axios";
const StudentSignUp = () => {
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [citizenId, setId] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  
  const submitHandler = (e) =>{
    e.preventDefault();
    const data={
      name:  name,
      surname: surname,
      citizenId: citizenId,
      phone: phone,
      address: address,
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
        <div className="mylogin">
            <div className="loginForm">
                <form  id="signInForm" onSubmit={submitHandler}>
                    <input type="text" className="myinput" required placeholder="Ad" onChange = { e => setName(e.target.value)}/>
                    <input type="text" className="myinput" required placeholder="Soyad" onChange = { e => setSurname(e.target.value)}/>
                    <input type="text" className="myinput" required placeholder="T.C. No." onChange = { e => setId(e.target.value)}/>
                    <input type="text" className="myinput" required placeholder="Telefon No." onChange = { e => setPhone(e.target.value)}/>
                    <input type="text" className="myinput" required placeholder="Adres" onChange = { e => setAddress(e.target.value)}/>
                    <input id="signUpButton" type="submit"  value="Kaydet" className="btn btn-primary mybtn" />
                </form>
            </div>
        </div>
    </div>
  )
  
};

export default StudentSignUp;