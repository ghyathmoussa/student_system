import React,  {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";


const ListBranches = () => {
    const stopIt = (e) =>{
        e.target.stop();
    }
    const startIt = (e) =>{
        e.target.start();
    }
    const popPopUp = (e) =>{
        setTimeout(function open(event){
                document.querySelector(".popup").style.display = "block";
            },0
        )
        
        document.querySelector("#close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none";
        });
    }


    /******Axios *********/
    const [branches, setBranches] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:4000/show-branchs").then((response) => {
        if (response.data.error) {
            alert(response.data.error);
        } else {
            setBranches(response.data)
        }
        });
    },[])
    console.log(branches)


  return (
    <div>
        <div className="listBranches">
        <Link to="/mainPage"><button id="backButton" type="button" class="btn btn-primary btn-lg">Geri</button></Link>
            <div className="listContainer">
                <div className="columnNames">
                    <p>Dersler</p>
                    <p>Şube Adı</p>
                    <p>Adres</p>
                    <p>Ulaşım Olanakları</p>
                </div>
                {branches.map((branch) =>
                    <div className="Entry" key={branch.sube_id}>
                        <marquee behavior="scroll" direction="left" scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>İngilizce,Fransızca,Almanca,İtalyanca</marquee>
                        <p>{branch.isim}</p>
                        <marquee behavior="scroll" direction="left" scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>{branch.adres}</marquee>
                        <p>{branch.tanitim}</p>
                    </div>
                )}
                
            </div>
            <div className="popup">
                <button id="close">&times;</button>
                <h2>Derslerin Seansları</h2>
                <p>
                buraya seanslar gelecek
                </p>
            </div>
        </div>
    </div>
  )
  
};

export default ListBranches;