import * as React from "react";
import s from './messages.module.css'
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import MessagesForm from "./MessagesForm/MessagesForm";
import {deleteMessage, getDialogsMessage} from "../../redux/messages-reduser";
import {useState} from "react";
import MessagesList from "./MessagesList";
import Form from "react-bootstrap/Form";
import DialogItem from "./DialogItem";
import UserItem from "./UserItem";
import profileLogo from "../../media/uzerlogo.png";
import {BsChevronDown} from "react-icons/bs";

const Messages = (props) => {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(false)
    let DialogsList = <ul>
        {props.dialogsData.map(item => (
            /* <li key={item.id} onClick={()=> {setValue(item.id)}}>{item.user} </li>*/
            <UserItem onClick={() => {
                setCount(!count)
                setValue(item.id)
            }} name={item.user} itemId={item.id} value={value}/>
        ))}

    </ul>

    /*  let  MessagesList =  <ul>
          {props.messagesData[value].messages.map(item => (
              <li key={item.id}>{item.message} </li>
          ))}
      </ul>*/
    return <div classname={s.area}>
        <div className={s.messagesBG}>
            <div className={"row p-3"}>
                <div className={count ? "col-lg-4 order-2 order-lg-1 d-none d-lg-block" : "col-lg-4 order-1 "}>

                    <div className={s.containerHalfLeft}>
                        <div className={"d-flex"}>
                            <Form.Control placeholder="Введите имя ..." type="textarea"
                                          name="name" className={"p-1"}/>
                            <Button className={s.search} variant="primary" type="submit">
                                Найти
                            </Button>
                        </div>
                    </div>
                    <DialogItem data={DialogsList}/>
                    {/*  <div className={s.containerHalfLeft}>
            </div>*/}
                </div>
                <div className={count ? "col-lg-8 order-1  " : "col-lg-8 order-2    d-none d-lg-block"}>
                    <div className={s.trans}>
                        <div className={"d-block d-lg-none" }>
                    <a className={s.closeArrow} onClick={() => {
                        setCount(!count)
                    }}> <BsChevronDown/></a>
                        </div>
                    <div className={s.userDialogContainer} onClick={props.onClick}>
                        <div className={"d-flex"}>
                            <div className={"p-1"}>
                                <img src={profileLogo}/>
                            </div>
                            <div className={"p-2"}>
                                <div className={s.messageUser}>{props.dialogsData[value].user}</div>

                            </div>
                        </div>
                    </div>

                        <div className={s.containerHalfRight}>
                            <MessagesList messagesData={props.messagesData} deleteMessage={props.deleteMessage}
                                          value={value}/>

                        </div>

                    <div className={s.containerHalfLeft}>
                        <MessagesForm setDialogsMessage={props.getDialogsMessage} value={value}/>

                    </div>

                    </div>

                </div>

            </div>


        </div>
    </div>
}

const mapStateToProps = (state) => {

    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        isAuth: state.authReducer.isAuth

    };
}
export default connect(mapStateToProps, {getDialogsMessage, deleteMessage})(Messages)