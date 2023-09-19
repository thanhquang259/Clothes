import React from 'react';
import Header from '../Header/Header'
import './ContentTee1.scss'
import ImageGallery from './ImageGallery';
import TeeHelp from '../../assets/Teehelp.jpg'
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrolltoTop/ScrolltoTop';
const ContentTee1 = () => {
    // const quantityInput = document.querySelector(".quantity input");
    // const increaseButton = document.querySelector(".quantity .increase");
    // const decreaseButton = document.querySelector(".quantity .decrease");

    // // Tăng số lượng
    // increaseButton.addEventListener("click", function () {
    //     quantityInput.value++;
    // });

    // // Giảm số lượng
    // decreaseButton.addEventListener("click", function () {
    //     quantityInput.value--;
    // });

    return (
        <div>
            <div>
                <Header />
            </div>
            <ImageGallery />
            <div className='content'>
                <h1 className="title-head">NS TEE - GREY</h1>
                <div className='price-box'>
                    <span className='gia-goc'>380.000đ</span>
                </div>
                <div className='Thong-tin'>
                    <p>
                        Thông tin sản phẩm
                        <br></br>
                        - Chất liệu: Cotton
                        <br></br>
                        - Form: Oversize
                        <br></br>
                    </p>
                    <div>
                        <div className="header">Kích thước</div>
                        <div className="btn-kich-thuoc" >
                            <button className="btnS">S</button>
                            <button className="btnM">M</button>
                            <button className="btnL">L</button>
                            <button className="btnXL">XL</button>
                        </div>
                    </div>

                </div>
                {/* <div class="quantity">
                    <button className="decrease">-</button>
                    <input type="number" value="1" min="1" max="100" />
                    <button className="increase">+</button>
                </div> */}
            </div>

            <div style={{ float: "left", width: "100%", textAlign: "center", paddingBottom: "50px" }}>
                <div style={{ textAlign: "center", fontSize: "25px" }}>Hướng dẫn chọn size:</div>
                <img width="50%" src={TeeHelp} ></img>
            </div>
            <div>
                <ScrollButton />
                <Footer />
            </div>
        </div>

    )
}


export default ContentTee1;
