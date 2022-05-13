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
    axios.post("http://localhost:5000/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data)
        window.location.href = `http://localhost:4000/`;
      }
    });
  }

  return (
    <div>
        <div className="mylogin">
            <div className="loginForm">
                <form  onSubmit={submitHandler}>
                    <input type="text" className="myinput" required
                            onChange = { e => setUser(e.target.value)}/>
                    <br/><br/>
                    <input type="password" className="myinput"  required value= {password}
                            onChange = { e => setPassword(e.target.value)}/>
                    <br/><br/>
                    <input type="submit"  value="Sign in" className="btn btn-primary mybtn" />
                </form>
            </div>
        </div>
    </div>
  )
  
};

export default Login;