import * as React from 'react'
import s from './header.module.css'
import logo from '../../media/logo/Zeronet_logo.png'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import {takeLogoutData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const Header = (props) =>{
    const click = () => {props.takeLogoutData() }
    return <div className={s.header}>
        <div className="container">
            <div className="row align-items-center" >
                <div className="col-sm-10">
                    <img className={s.mainlogo} src={logo} alt="Logo" />
                </div>
                <div className="col-sm-2">
                    <Button variant="primary" onClick={click}>Logout</Button>{' '}

                </div>
            </div>
        </div>
    </div>
}
export default connect (null, {takeLogoutData}) (Header)