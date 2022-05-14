import React , {useState} from "react";


import axios from "axios";
const Login = () => {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    const data={
      username:  user,
      password: password,
    }
    console.log(data);
    axios.post("http://localhost:4000/login", data).then((response) => {
        console.log(response)
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data)
        //window.location.href = `http://localhost:3000/`;
      }
    });
  }

  return (
    <div>
        <div className="mylogin">
            <div className="loginForm">
                <form  id="signInForm" onSubmit={submitHandler}>
                  <br></br>
                  <br></br>
                    <input type="text" className="myinput" required placeholder="Kullanıcı Adı" onChange = { e => setUser(e.target.value)}/>
                    <input type="password" className="myinput"  placeholder="Şifre" required value= {password}
                            onChange = { e => setPassword(e.target.value)}/>
                    <input id="signInButton" type="submit"  value="Giriş Yap" className="btn btn-primary mybtn" />
                  <br></br>
                  <br></br>
                </form>
            </div>
        </div>
    </div>
  )
  
};

export default Login;