import React from "react";
import {Link} from "react-router-dom"


const ListStudents = () => {

  return (
    <div>
        <div className="listStudents">
        <Link to="/mainPage"><button id="backButton" type="button" class="btn btn-primary btn-lg">Geri</button></Link>
            <div className="listContainer">
                <div className="columnNames">
                    <p>İsim</p>
                    <p>Soyisim</p>
                    <p>T.C. No.</p>
                    <p>Dil</p>
                    <p>Ödeme Bilgisi</p>
                </div>
                <div className="Entry">
                    <p>Utku</p>
                    <p>Magemizoğlu</p>
                    <p>32456787654</p>
                    <p>Fransızca</p>
                    <p>Ödemedi</p>
                </div>
                <div className="Entry">
                    <p>Hakan</p>
                    <p>Kılıç</p>
                    <p>2346567897654</p>
                    <p>İngilizce</p>
                    <p>Ödendi</p>
                </div>
            </div>
        </div>
    </div>
  )
  
};

export default ListStudents;