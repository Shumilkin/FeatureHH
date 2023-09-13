import * as React from "react";
import s from '../../profile.module.css'

import Form from "../../ProfileImageForm";
import {FcOldTimeCamera} from "react-icons/fc";
import {FcFilmReel} from "react-icons/fc";
import {FcApproval} from "react-icons/fc";
import {SocialIcon} from "react-social-icons";
import {FcElectricity} from "react-icons/fc";
import Status from "../Status";
import {useState} from "react";
import {AiOutlineEdit} from "react-icons/ai";
import ProfileContactsForm from "../../Form/ProfileContactsForm";


const ProfilePosts = (props) => {

    return <div>

        <div>
            <u>Contacts:</u>
            <button onClick={() => setCount(count + 1)}>
                {count % 2 ? "Save" : "Edit"}
            </button>
        </div>


        {count % 2 ? <div>
            <ProfileContactsForm list={props.list} contacts={props.contacts}  setProfileContacts={props.setProfileContacts}/>
            {/*<button onClick={() => props.setProfileContacts('1')}>
                sd
            </button>*/}
        </div> : <div>{props.contacts}</div>}

    </div>

}

export default ProfilePosts
