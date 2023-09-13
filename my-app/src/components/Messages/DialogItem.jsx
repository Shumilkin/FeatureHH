import s from "./messages.module.css"
import profileLogo from "../../media/uzerlogo.png"
import * as React from "react";
import BackToUp from "@uiw/react-back-to-top";
import Scroll from "./MessagesContainer";
import UserItem from "./UserItem";

const DialogItem = (props) => {

    let user =  <div className={s.postContainer}>
        <div className={"d-flex"}>
            <div className={"p-1"}>
                <img src={profileLogo} className={s.profileMessageLogo}/>
            </div>
            <div className={"p-2"}>
                <div className={s.messageUser}>Shumila</div>
                <div className={s.messageTime}>4 hours ago</div>
            </div>
        </div>
    </div>

    return <div className={s.usersContainer}>
       {/* <BackToUp />*/}
{/*<Scroll/>*/}
        {props.data}

       {/* {user}*/}
    </div>
}
export default DialogItem
