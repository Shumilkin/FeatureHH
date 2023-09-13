import * as React from "react";
import s from '../../profile.module.css'
import {useSelector} from "react-redux";
import {FcLike} from "react-icons/fc";
import {FaRegCommentDots} from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderDropDown from "../../../Header/HeaderDropdown";


const ProfilePost = (props) => {
    const profileLogo = useSelector((state) => state.profilePage.profileInfo.photos.small)
    return <div className={s.postContainer}>
        <div className={"d-flex"}>
            <div className={"p-2"}>
                <img src={profileLogo} className={s.profilePostLogo}/>
            </div>
            <div className={"p-3"}>
                <div className={s.postUser}>shumila</div>
                <div className={s.postTime}>4 часа назад</div>
            </div>
            <div className="ms-auto p-2">
                <NavDropdown
                    title=""
                >
                    <NavDropdown.Item href="#action3">
                       В избранное
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Поделиться </NavDropdown.Item>

                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action5">
                        Удалить
                    </NavDropdown.Item>

                </NavDropdown>
            </div>

        </div>
        <div className={s.postData}>
            {props.postText}
        </div>

        <div className={"d-flex pt-3"}>
            <div className={s.postLike}>
                {props.likesCount} <FcLike style={{height: 25, width: 25}}/>
            </div>
            <div className={s.postComment}>
               <span>3 </span> <FaRegCommentDots style={{height: 25, width: 25}}/> Комментарии
            </div>
        </div>


    </div>

}

export default ProfilePost
