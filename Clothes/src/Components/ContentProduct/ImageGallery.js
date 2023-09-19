import React, { useState } from "react";
import Tee11 from '../../assets/Tee1(1).jpg'
import Tee12 from '../../assets/Tee1(2).jpg'
import Tee13 from '../../assets/Tee1(3).jpg'
import Tee1 from '../../assets/Tee1.jpg'
import Tee14 from '../../assets/Tee1(4).jpg'
import { FcPrevious, FcNext } from 'react-icons/fc'
import './ImageGallery.scss'
const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            src: Tee1,
            alt: "Image 1",

        },
        {
            src: Tee11,
            alt: "Image 2",
        },
        {
            src: Tee12,
            alt: "Image 3",
        },
        {
            src: Tee13,
            alt: "Image 4",
        },
        {
            src: Tee14,
            alt: "Image 5",
        },
    ];

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="Container" >
            <div className="picture" >
                <div className='swiper-button-pre' onClick={handlePreviousImage} style={{ float: "left" }}><FcPrevious /></div>
                <img src={images[currentImage].src} alt={images[currentImage].alt} style={{ width: "65%", height: "500px", paddingLeft: "10px", float: "left" }} />
                <div className='swiper-button-next' onClick={handleNextImage} style={{ float: "left" }}><FcNext /></div>


                <div style={{ width: "100%", paddingLeft: "30px", paddingTop: "25px" }}>
                    <img src={Tee11} style={{ width: "15%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee12} style={{ width: "15%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee13} style={{ width: "15%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee14} style={{ width: "15%", height: "100px", margin: "0px 10px 10px 0" }} />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;