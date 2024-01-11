import React from "react";
import './mbbank.scss';
function Mbbank() {
    return (
        <>
            <div className="Mbbank-container">
                <div className="box-mbbank">
                    <div className="header">
                        <div className="update">Cập nhật</div>
                        <div className="logo">MB</div>
                        <div className="change-language">ENG</div>
                    </div>
                    <div className="form">
                        <h3>Đăng nhập</h3>
                        <input id="username" placeholder="Tên đăng nhập" /> <br />
                        <input id="password" type="password" placeholder="Mật khẩu" /><br />
                        <button>Đăng nhập</button>
                        <div>
                            <a href="#">QUÊN MẬT KHẨU</a>
                            <a href="#">TẠO TÀI KHOẢN</a>
                        </div>
                    </div>
                    <div className="options">
                        <div>Quét QR</div>
                        <div>Xác thực D-OTP</div>
                        <div>Tiện ích</div>
                        <div>Chat với eMBee</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mbbank;