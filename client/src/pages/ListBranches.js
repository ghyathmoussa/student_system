import React from "react";
import {Link} from "react-router-dom"


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
                <div className="Entry">
                    <marquee behavior="scroll" direction="left" scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>İngilizce,Fransızca,Almanca,İtalyanca</marquee>
                    <p>Esenler Şubesi</p>
                    <marquee behavior="scroll" direction="left" scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>gençosman mah. ensar caddesi fsm yurdu güngören/istanbul</marquee>
                    <p>tramvay,metro,otobüs</p>
                </div>
                <div className="Entry">
                    <marquee behavior="scroll" direction="left"  scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>İngilizce,Fransızca,Almanca,İtalyanca</marquee>
                    <p>Kağıthane Şubesi</p>
                    <marquee behavior="scroll" direction="left" scrollamount="7" onMouseOver={stopIt} onMouseOut={startIt} onClick={popPopUp}>gençosman mah. ensar caddesi fsm yurdu güngören/istanbul</marquee>
                    <p>metro,otobüs</p>
                </div>
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