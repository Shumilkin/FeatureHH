import * as React from "react";
import s from './messages.module.css'
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../media/logo/Zeronet_logo.png";
import {Button} from "react-bootstrap";
import MessagesForm from "./MessagesForm/MessagesForm";
import {deleteMessage, getDialogsMessage} from "../../redux/messages-reduser";
import {useState} from "react";
import MessagesList from "./MessagesList";
const Messages = (props) =>{
    const [value, setValue] = useState(0);
   let  DialogsList =  <ul>
       {props.dialogsData.map(item => (
           <li key={item.id} onClick={()=> {setValue(item.id)}}>{item.user} </li>
       ))}
   </ul>
  /*  let  MessagesList =  <ul>
        {props.messagesData[value].messages.map(item => (
            <li key={item.id}>{item.message} </li>
        ))}
    </ul>*/
    return     <div classname={s.area} >

        <div className="container">
            <div className="row align-items-center" >
                <div className="col-sm-3">
                    {DialogsList}
                </div>
                <div className="col-sm-9">
                        <MessagesList messagesData={props.messagesData}  deleteMessage={props.deleteMessage} value={value}/>
                </div>
            </div>
        </div>
        <MessagesForm setDialogsMessage={props.getDialogsMessage} value={value}/>
    </div>
}
const mapStateToProps = (state) => {

    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData:state.messagesPage.messagesData,
        isAuth:state.authReducer.isAuth

    };
}
export default connect(mapStateToProps, {getDialogsMessage, deleteMessage}) (Messages)