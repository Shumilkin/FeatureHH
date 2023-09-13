import s from "./messages.module.css";
import profileLogo from "../../media/uzerlogo.png";
import * as React from "react";

let UserItem = (props) =>{
 let   value = props.value
    let id = props.itemId
    return <div className={value == id ? s.postContainerActive :  s.postContainer  } onClick={props.onClick}>
        <div className={"d-flex"}>
            <div className={"p-1"}>
                <img src={profileLogo} className={s.profileMessageLogo}/>
            </div>
            <div className={"p-2"}>
                <div className={s.messageUser}>{props.name}</div>
                <div className={s.messageTime}>4 hours ago</div>
            </div>
        </div>
    </div>
}
export default UserItem