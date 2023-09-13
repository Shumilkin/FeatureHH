import * as React from "react";
import ProfileStatusForm from "../Form/ProfileStatusForm";
import {Lines} from "react-preloaders";

const Status = (props) =>{
    /* value = this.context*/

    return  <div >

        <ProfileStatusForm setCount2={props.setCount2} count2={props.count2} status={props.status}  setStatus={props.setStatus} />

    </div>
}

export default Status
/*НУЖНО ПРОПИСАТЬ CONNECT*/