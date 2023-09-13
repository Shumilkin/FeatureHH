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
import ProfileContactsForm from "./Form/ProfileContactsForm";
import {HiOutlinePencilAlt} from "react-icons/hi";


const ProfileContacts = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    let contacts = ''

    for (var key in props.list) {
        const site = "https://" + key + ".com"
        contacts = [...contacts,
            <div className={"row  "}>
                <div className={"col-3 col-lg-2"}>
                    <SocialIcon style={{height: 50, width: 50}} url={site}/>
                </div>
                <div className={"col-5 m-2 "}>
                    <div className={"input-group "}>
                        <span className="input-group-text" id="basic-addon1">
                        {(props.list[key] != null  ) ? props.list[key] : "---"}
                            {props.list[key] === "" ? "---" : null}</span>
                    </div>
                </div>
            </div>
        ]
    }
    return <div>

        <div className={"pb-4  "}>
            <div className={"row row-cols-auto text-center"}>
                <div className={"col"}><u className={s.header}>Контакты:</u></div>
                <div className={"col"} onClick={() => setCount(count + 1)}>
                    {/* {count % 2 ? "Save" : "Edit"}>*/}
                    <div className={s.headerControl}><HiOutlinePencilAlt style={{height: 35, width: 35}}/></div>

                </div>
            </div>
            {/*
          <div className={s.headerControl} onClick={() => setCount(count + 1)}>
              {count % 2 ? "Save" : "Edit"}>
              <HiOutlinePencilAlt  style={{height: 35, width: 35}}/>
          </div>*/}
            {/* <button onClick={() => setCount(count + 1)}>
                {count % 2 ? "Save" : "Edit"}
            </button>*/}
        </div>
        {count % 2 ? <div>
                <ProfileContactsForm list={props.list} contacts={props.contacts} setCount={setCount}
                                     setProfileContacts={props.setProfileContacts}/>
                {/*<button onClick={() => props.setProfileContacts('1')}>
                sd
            </button>*/}
            </div> :
            <div>{contacts}</div>}

    </div>

}

export default ProfileContacts
