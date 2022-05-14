import React from "react";

const MainPage = () => {

    return (
        <div>
            <div className="mainpage">
                <div class="container">
                    <div className="left-container">
                        <button type="button" class="btn btn-primary btn-lg">Şube Listele</button>
                        <button type="button" class="btn btn-primary btn-lg">Öğrenci Ekle</button>
                        <button type="button" class="btn btn-primary btn-lg">Öğrenci Listele</button>
                        <button type="button" class="btn btn-primary btn-lg">Öğrenci Sil</button>
                    </div>
                    <div className="right-container">
                        <button type="button" class="btn btn-primary btn-lg">Öğrenciyi Kursa Ekle</button>
                        <button type="button" class="btn btn-primary btn-lg">Öğrenciyi Kurstan Sil</button>
                        <button type="button" class="btn btn-primary btn-lg">Taksit Al</button>
                        <button type="button" class="btn btn-primary btn-lg">Çıkış</button>

                    </div>
                </div>
            </div>
        </div >
    )

};

export default MainPage;