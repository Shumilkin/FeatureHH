import * as React from 'react'
import './App.css';
import {BrowserRouter, Redirect,} from "react-router-dom";
import Header from "./components/Header/HeaderTest";
import {Navigate, Route, Routes} from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/Messages";
import FriendsContainer from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {getProfileStatus, setUserProfile} from "./redux/profile-reduser";
import {connect, useDispatch} from "react-redux";
import {useEffect, useState} from 'react';
import LoginPage from "./components/Login/LoginPage";
import {getAuthData, setAuthData, takeAuthData, takeCaptcha, takelogoutData} from "./redux/auth-reducer";
import ReactSlickDemo from './components/Profile/ProfileCarousel'
import Messages from "./components/Messages/Messages";
import Messages2 from "./components/Messages/Messages2";
const CountStateContext = React.createContext()


/*componentDidMount() {
    /!*иже задается айди посещенной страницы*!/
    this.props.getProfileStatus(24842)
props.setUserProfile(userId)

}*/

function App(props) {
    let  userId  = window.location.pathname.substring(1)
    const [count, setCount] =useState(true);
const dispatch = useDispatch()
   useEffect(() => {
       /*props.getProfileStatus(userId)*/
       props.takeAuthData()
       props.takeCaptcha()
dispatch(setUserProfile(24842))
    });

/*    if (props.isAuth === false ){ return         <BrowserRouter>
            <CountStateContext.Provider value="test">
                <div >

                    <Routes>
                        <Route path='/!*' element={<LoginPage />}/>
                    </Routes>
                </div>
            </CountStateContext.Provider>
        </BrowserRouter>
    }*/
    return (
        <BrowserRouter>
            <CountStateContext.Provider value="test">
                <div className={count == true ?  "wrapper" : "wrapperClose"}  >
                    <Header  setCount={setCount} count={count}/>
                    <Sidebar  />
                    <Routes>
                        <Route path='/:id' element={<ProfileContainer/>}/>
                        <Route path="/" element={<ProfileContainer />} />
                        <Route path='/messages' element={<Messages2/>}/>
                        <Route path='/friends' element={<FriendsContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<LoginPage />}/>
                    </Routes>
                </div>
            </CountStateContext.Provider>
        </BrowserRouter>
    );
}
const mapStateToProps = (state) => {

    return {
        isAuth: state.authReducer.isAuth,
    };
}

export default connect(mapStateToProps, {setUserProfile, getProfileStatus, getAuthData, takeAuthData, takeCaptcha})(App);
