import React from "react";
import  './loginCoroucel.css'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../media/logo/Zeronet_logo.png";
function LoginCoroucel2(props) {

    return <div className="align-items-center">

        <div className="row background align-items-center">

                <div className="col">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <div className="text-center">
                                <img className="carouselItem " src="https://kanzoboz.ru/data/fupl/e3eba5/13f1/ef4d5009476c4f667d18.jpg" alt="Logo"/>
                                <div className="text-white outlineCarousel">
                                    <h3 >Связь С Миром</h3>
                                    <p>Оставайтесь всегда рядом со своими близкими.</p>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className="text-center">
                                <img className="carouselItem " src="https://zygmantovich.com/wp-content/uploads/happiness.jpg" alt="Logo"/>
                                <div className="text-white outlineCarousel">
                                    <h3>Усильте Свою Дружбу</h3>
                                    <p>Друг - это человек, который всегда рядом.</p>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </Carousel.Item> <Carousel.Item interval={1000}>
                        <div className="text-center">
                            <img className="carouselItem " src="https://www.wuor.ru/upload/iblock/10f/ihb6rhm10383s7ov43vx0htvejw3kgxi.jpg" alt="Logo"/>
                            <div className="text-white outlineCarousel">
                                <h3>Вместе Лучше</h3>
                                <p>Только вместе мы можем достичь новых вершин.</p>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </Carousel.Item>
                    </Carousel>
                </div>





        </div>
    </div>

}

export default LoginCoroucel2;