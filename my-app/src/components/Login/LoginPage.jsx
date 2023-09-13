/*
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "../Header/header.module.css";
import logo from "../../media/logo/Zeronet_logo.png";
import {Button} from "react-bootstrap";

const LoginPage = () =>{
    return <div >
       Login Page
    </div>
}
export default LoginPage*/
import LoginPageForm from "./LoginForm";
import {useEffect} from 'react';
import React from "react";
import {getAuthData, takeCaptcha} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./login.module.css";
import logo from "../../media/logo/Zeronet_logo.png";
import LoginCoroucel from "./LoginCorousel";


const LoginPage = (props) => {
    useEffect(() => {

        // Обновляем заголовок документа с помощью API браузера

    });
    const errorMessage = useSelector(state => state.authReducer);

    return <div>

            <div className="row align-items-center  ">
                <div className=" col-sm-6  g-0 align-items-center order-lg-1 order-sm-1 order-2 ">

                    <div>
                        <LoginCoroucel/>
                    </div>
                </div>
                <div className="col-sm-6  order-lg-2 order-sm-2 order-1">
                    <div className="row  mt-5 mt-sm-0">
                        <div className="col-10 col-sm-7   offset-sm-3 offset-1">
                            <div className="text-center ">
                                <img className="mainlogo " src={logo} alt="Logo"/> <h3 className="msnetLogo">MSNet2</h3>
                            </div>
                            <div className={"pt-1 pb-1"}>
                                <p className="text-center text-muted"> Добро пожаловать в MSNet
                                    <br/>платформу соединяющую с
                                    социальным
                                    миром</p>
                            </div>

                            <LoginPageForm getAuthData={props.getAuthData} errorMessage={errorMessage}
                                           captcha={props.captcha}/>
                            <p className="text-center mt-4 ">У вас нет аккаунта? <i>Зарегистрироваться</i></p>
                        </div>
                    </div>

                </div>
            </div>


    </div>
}
const mapStateToProps = (state) => {

    return {
        isAuth: state.authReducer.isAuth,
        captcha: state.authReducer.captcha
    };
}
export default connect(mapStateToProps, {getAuthData, takeCaptcha})(LoginPage)