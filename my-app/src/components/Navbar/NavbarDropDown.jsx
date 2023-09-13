import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={s.nav}>
        <div>
            <NavLink to="/24842" end>
                Profile
            </NavLink>
        </div>
        <div>
            <NavLink to="/messages" end>
                Messages
            </NavLink>
        </div>
        <div>
            <NavLink to="/friends" end>
                Friends
            </NavLink>
        </div>
        <div>
            <NavLink to="/music" end>
                Music
            </NavLink>
        </div>
        <div>
            <NavLink to="/settings" end>
                Settings
            </NavLink>
        </div>
        

    </div>

}
export default Navbar