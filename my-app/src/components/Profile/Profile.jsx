import * as React from "react";
import s from './profile.module.css'
import  { useState } from 'react';
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

import Status from "./Status/Status";
import {setProfileContacts} from "../../redux/profile-reduser";
const Profile = (props) =>{
   /* value = this.context*/
   /* console.log(useParams())*/
    const [count, setCount] = useState(0);

    return  <div className={s.area, s.profileBg} >

    <ProfileInfo profileInfo={props.profileInfo} value={props.value} status={props.status} setStatus={props.setStatus} setProfileContacts={props.setProfileContacts} setUserPhoto={props.setUserPhoto} isInitial={props.isInitial} postsData={props.postsData} setUserProfilePost={props.setUserProfilePost}/>



    </div>
}
/*let mapStateToProps = (state) => (
    {profileId: state.profilePage.profileId}
)*/
export default Profile
/*НУЖНО ПРОПИСАТЬ CONNECT*/