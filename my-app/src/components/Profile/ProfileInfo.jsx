import * as React from "react";
import s from './profile.module.css'
import {useState} from 'react';
import Status from "./Status/Status";
import ProfileContactsForm from "./Form/ProfileContactsForm";
import Form from "./ProfileImageForm";
import {FcOldTimeCamera} from "react-icons/fc";
import {FcFilmReel} from "react-icons/fc";
import {FcApproval} from "react-icons/fc";
import {SocialIcon} from "react-social-icons";
import {FcElectricity} from "react-icons/fc";


import ReactSlickDemo from "./ProfileCarousel";
import ProfileInfoTop from "./ProfileInfoTop";
import ProfileContacts from "./Contacts";
import ProfilePosts from "./ProfilePosts";
import ProfilePostsForm from "./Form/ProfilePostsForm";


const ProfileInfo = (props) => {
    /* value = this.context*/

    let list = props.profileInfo.contacts

    let contacts = ''
    for (var key in list) {
        contacts = [...contacts, <div>{key + " : " + list[key]}</div>]
    }

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


    return <div classname={s.area}>
        <img className={s.profileBG}
             src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"/>
        <div className = {s.profileInfoContainer}>
            <ProfileInfoTop photo={props.profileInfo.photos.small} setUserPhoto={props.setUserPhoto}
                            fullName={props.profileInfo.fullName} status={props.status}
                            setStatus={props.setStatus} status={props.status}/>
        </div>
        <div className={s.containerCarousel}>
            <div className={s.carousel}>
                <ReactSlickDemo/>
            </div>
        </div>
        {/*

        {count2 % 2 ?
            <Status setCount2={setCount2} count2={count2} setStatus={props.setStatus} status={props.status}/> :
            <div>status : {props.status}</div>}

        {count2 % 2 ?
            '' : <button onClick={() => setCount2(count2 + 1)}>
                {count2 % 2 ? "Save" : "Edit"}
            </button>}
*/}
        <div className={s.containerNonColor}>
            <div className={"row"}>
                <div className={"col-sm-8"}>
                    <div className={s.containerHalfLeft}>
                        <ProfilePostsForm data={props}/>
                    </div>
                    <div className={s.containerHalfLeftNonColor}>
                        <ProfilePosts postsData={props.postsData} setUserProfilePost={props.setUserProfilePost}/>
                    </div>
                </div>
                <div className={"col-sm-4"}>
                    <div className={s.containerHalfRight}>
                        <ProfileContacts setProfileContacts={props.setProfileContacts}
                                         profileContacts={props.profileInfo.contacts} list={list} contacts={contacts}/>
                                         {/*
                        Id :{props.profileInfo.userId}
                        Looking for a job :{props.profileInfo.lookingForAJobDescription}*/}
                    </div>
                </div>
            </div>
        </div>


    </div>

}

export default ProfileInfo
