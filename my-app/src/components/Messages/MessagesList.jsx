import * as React from "react";
import s from './messages.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagesForm from "./MessagesForm/MessagesForm";
import {useState} from "react";
import profileLogo from "../../media/uzerlogo.png";
import {AiOutlineDelete} from "react-icons/ai";

const MessagesList = (props) => {

    const MessageItem = (props) => {
        return <div className={"d-flex"}>
            <div >
                <img src={profileLogo} className={s.messageLogo}/>
            </div>
            <div className={s.messageDataContainer}>
                <div className={"d-flex"}>
                    <div className={"p-2"}>
                        <div className={s.messageTextData}>{props.textData}</div>
                    </div>
                    <div className={"p-2"}>
                        {/*<button onClick={props.onClick}>- del</button>*/}
                        <AiOutlineDelete onClick={props.onClick}/>
                    </div>
                </div>
            </div>

        </div>
    }

    let MessagesListData = <div className={s.messagesContainer}>
        <ul>
            {props.messagesData[props.value].messages.map(item => (
                <div className={s.messageItemContainer}>
                    {/*<li key={item.messageId}>{item.message}
                </li>*/}
                    <MessageItem textData={item.message}
                                 onClick={() => props.deleteMessage({value: props.value, key: item.messageId})}/>
                    {/*<button onClick={()=> props.deleteMessage({value:props.value,key:item.messageId})}>- del</button>*/}
                </div>
            ))}
        </ul>
    </div>
    return <div>{MessagesListData}</div>
}

export default MessagesList