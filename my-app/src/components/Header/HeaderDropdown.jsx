import * as React from 'react'
import s from './header.module.css'
import logo from '../../media/logo/Zeronet_logo.png'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import {takeLogoutData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const HeaderDropDown = (props) =>{

    return <div className={s.header}>
        <div className="">
            <div className="" >
                <div className="">
                    <img className={s.mainlogo} src={logo} alt="Logo" />
                </div>

                    <Button variant="primary" >Logout</Button>{' '}

            </div>
        </div>
    </div>
}
export default  HeaderDropDown