import React from "react";
import './home.scss';
import Nav from "../../component/Navigation/Nav";

function Home() {
    const handleGetScreenWidth = () => {
        alert('Chiều ngang: ' + window.innerWidth + ' px')
    }
    return (
        <>
            <Nav />
            <div className="Home-container">
                <h1>Home Page</h1>
                <button onClick={handleGetScreenWidth}>Xem chiều ngang màn hình</button>
                <div className="box__1">
                    <div>Xem quy trình deploy dự án lên github pages</div>
                </div>
                <div>h</div>
            </div>
        </>
    );
}

export default Home;
