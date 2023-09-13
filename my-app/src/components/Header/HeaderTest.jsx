import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {connect} from "react-redux";
import {takeLogoutData} from "../../redux/auth-reducer";
import s from "./header.module.css";
import * as React from "react";
import HeaderDropDown from "./HeaderDropdown";
import logo from "../../media/logo/Zeronet_logo.png";
import {FaUserFriends} from "react-icons/fa";
import {BiMessageRounded} from "react-icons/bi";
import {RiNotification2Line} from "react-icons/ri";
import {useSelector} from 'react-redux'
import Activities from "../Friends/Activities";
import {useDispatch} from 'react-redux'
import {BsHouseDoor} from "react-icons/bs";
import {NavLink} from "react-router-dom";

import {AiOutlineUser} from "react-icons/ai";

import {BsChevronDown} from "react-icons/bs";


function Header(props) {
    const profileLogo = useSelector((state) => state.profilePage.profileInfo.photos.small)
    const dispatch = useDispatch()

    return (
        <div className={s.header}>

            <Navbar bg="light" expand={"sm"} className=" m-0">
                <Container fluid>
                    <a className={!props.count ? s.arrow : s.arrowClose} onClick={()=> {props.setCount(!props.count)}}><BsChevronDown/></a>
                    <Navbar.Brand href="#">
                        <img className={s.mainlogo} src={logo} alt="Logo"/>
                        <span className={s.logoText}>MSNet</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${"sm"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                                Меню
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center  ">
                                <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Поиск"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button>*/}
                                </Form>
                                <Nav.Link href="#action2">
                                    <NavLink to="/friends" className="nav-link align-start   pl-2" end>
                                        <FaUserFriends/> <span className={"d-sm-none"}>Друзья</span>
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <NavLink to="/messages" className="nav-link align-middle   pl-2" end>
                                        <BiMessageRounded/><span className={"d-sm-none"}>Сообщения</span>
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <NavDropdown
                                        align="end"
                                        title=<div>
                                        <RiNotification2Line
                                            className={"d-inline"}/>
                                        <span className={"d-sm-none"}>Уведомления</span>
        </div>
id={`offcanvasNavbarDropdown-expand-${"sm"}`}
>
    <div className={s.activitiesContainer}>
        <Activities/>
    </div>
</NavDropdown>
</Nav.Link>

{/*<NavDropdown
                                align="end"
                                title=<RiNotification2Line/>
                            id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                            >
                            <div className={s.activitiesContainer}>

                                <Activities/>
                            </div>
                        </NavDropdown><span className={"d-sm-none"}>dfdfdf</span>*/}

    <NavDropdown
        align="end"
        title=<img className={s.profileLogo} src={profileLogo} alt="Logo"/>
id={`offcanvasNavbarDropdown-expand-${"sm"}`}
className={"dropleft"}
>

{/*   <NavDropdown.Item href="#action3">
                                        <HeaderDropDown/>
                                    </NavDropdown.Item>*/}
    <NavDropdown.Item><NavLink to="/" className="nav-link align-middle   pl-2" end>
        В профиль <AiOutlineUser/>
    </NavLink></NavDropdown.Item>
    <NavDropdown.Item href="#action4">
        Другое действие
    </NavDropdown.Item>
    <NavDropdown.Divider/>
    <NavDropdown.Item onClick={() => dispatch(takeLogoutData())}>
        <BsHouseDoor/> Выйти
    </NavDropdown.Item>

</NavDropdown>
{/* <Nav.Link href="#action2">
                                    <img className={ s.profileLogo} src={profileLogo} alt="Logo"/>
                                </Nav.Link>*/}
</Nav>

</Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>


</div>
);
}


export default connect(null, {takeLogoutData})(Header)