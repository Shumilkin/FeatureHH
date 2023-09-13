import s from './friends.module.css'
import {useSelector} from "react-redux";
import {MdVerifiedUser} from "react-icons/md";
import {BsMusicPlayer} from "react-icons/bs";
import {NavLink} from "react-router-dom";

let Activities = () => {
    const logo = useSelector((state) => state.profilePage.profileInfo.photos.small)
    const ActivitiesItem = (props) => {
        return  <div className={s.activitiesContainer}>
            <div className={"d-flex align-items-center"}>
                <div className={"align-items-center"}>
                    <img className={s.activitiesLogo} src={logo}/>
                </div>
                <div className={s.activitiesInfoContainer}>
                    <span className={s.activitiesName}> shumila </span><MdVerifiedUser style={{color: 'green', size: '50px'}}/>
                    <span>{props.action}</span> <i>
                    <NavLink className={s.navlink} to={props.link}  end>
                        <span>{props.object}</span>
                    </NavLink>

                </i>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>
    }
    return <div>

       <ActivitiesItem link={"/22"} action={"оценил публикацию"} time={"2 hours ago"} object={"Natalie Danilchenkofff"} />
        <ActivitiesItem link={"/1034"} action={"добавил нового друга"}  time={"3 hours ago"} object={"Katrin@Voronkevich"}/>
        <ActivitiesItem link={"/10"} action={"добавил нового друга"}  time={"6 hours ago"} object={"Дмитрий Долидов"}/>
        <ActivitiesItem link={"/9"} action={"поделился фото с"}  time={"8 hours ago"} object={"Jak Zigil`man"}/>

        <ActivitiesItem link={"/11"} action={"оценил публикацию"}  time={"15 hours ago"} object={"Andrecky"}/>
    </div>

}
export default Activities