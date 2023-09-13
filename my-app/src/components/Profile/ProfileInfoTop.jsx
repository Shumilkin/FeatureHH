import * as React from "react";
import s from './profile.module.css'

import Form from "./ProfileImageForm";
import {FcOldTimeCamera} from "react-icons/fc";
import {FcFilmReel} from "react-icons/fc";
import {FcApproval} from "react-icons/fc";
import {SocialIcon} from "react-social-icons";
import {FcElectricity} from "react-icons/fc";
import Status from "./Status/Status";
import {useState} from "react";
import {AiOutlineEdit} from "react-icons/ai";


const ProfileInfoTop = (props) => {
    const [count2, setCount2] = useState(0);
    return <div>

        <div className={s.info}>
            <div className={s.container}>

                <div className={"text-center"}>

                    <img className={s.profilePhoto} src={props.photo}/>
                    <div className={s.profileImageContainer}>
                        <div className={s.profileImage}>
                            <Form setUserPhoto={props.setUserPhoto}/>
                        </div>

                    </div>

                </div>

                <div className={"row align-items-center p-1"}>
                    <div className={"col-lg-4 text-center order-lg-1 order-sm-1 order-md-2 order-2"}>
                        <div className={"flex-column"}>
                            <div className={" text-center"}>
                                <div className="d-flex justify-content-around">
                                    <div className={"p-2 text-center", s.profileIcons}><FcOldTimeCamera
                                        style={{height: 25, width: 25}}/> 15 Фото
                                    </div>
                                    <div className={"p-2 text-center", s.profileIcons}><FcFilmReel
                                        style={{height: 25, width: 25}}/> 7 Видео
                                    </div>
                                </div>
                            </div>
                            <div className={" text-center"}>
                                <div className={"p-2 text-center", s.profileIcons}><FcElectricity
                                    style={{height: 25, width: 25}}/> 100 Монет
                                </div>
                            </div>
                            <div className={" text-center"}>
                                <SocialIcon style={{height: 40, width: 40}} className={s.profileNetwork}
                                            url="https://vk.com/"/>
                                <SocialIcon style={{height: 40, width: 40}} className={s.profileNetwork}
                                            url="https://youtube.com/"/>
                                <SocialIcon style={{height: 40, width: 40}} className={s.profileNetwork}
                                            url="https://facebook.com/"/>
                                <SocialIcon style={{height: 40, width: 40}} className={s.profileNetwork}
                                            url="https://instagram.com/"/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4 text-center order-lg-2 order-md-1 order-1 "}>
                        <div className={"flex-column"}>
                            <div className={" text-center"}>
                                <div className={"display-6"}> {props.fullName} <FcApproval/></div>
                            </div>
                            <div className={" text-center"}>

                                {/* <div> {props.status} </div>*/}
                                {count2 % 2 ?
                                    <Status setCount2={setCount2} count2={count2} setStatus={props.setStatus}
                                            status={props.status}/> :
                                    <div >{props.status}
                                        {count2 % 2 ?
                                            '' : <div className={s.editStatus}><AiOutlineEdit onClick={() => setCount2(count2 + 1)}/></div>
                                        }
                                    </div>}

                            </div>

                        </div>
                    </div>
                    <div className={"col-lg-4 text-center order-lg-3 order-sm-3 order-3"}>
                        <div className={"d-flex justify-content-around"}>
                            <div className={"text-center"}>
                                <div className={"display-6"}>3</div>
                                <div className={s.numbersInfo}>Поста</div>
                            </div>
                            <div className={"text-center"}>
                                <div className={"display-6"}>0</div>
                                <div className={s.numbersInfo}>Комментариев</div>
                            </div>
                            <div className={"text-center"}>
                                <div className={"display-6"}>504K</div>
                                <div className={s.numbersInfo}>Просмотров</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    </div>

}

export default ProfileInfoTop
