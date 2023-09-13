import * as React from "react";
import axios from 'axios';
import s from "./profile.module.css"
import {MdOutlineAddAPhoto} from "react-icons/md";
import {FcOldTimeCamera} from "react-icons/fc";

const Form = (props) => {
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState(null);

/*    const handleSubmit = async(event) => {
        event.preventDefault()
      /!*  const formData = new FormData();
        formData.append("image", selectedFile);*!/
        props.setUserPhoto(selectedFile)

    }*/

    const handleFileSelect = (event) => {
        /*setSelectedFile(event.target.files[0])*/
        props.setUserPhoto(event.target.files[0])

    }

    return (
<div className={s.form}>
        {/*<form  onSubmit={handleSubmit}>*/}
            <form >
            <label>
                <input type="file" onChange={handleFileSelect}/>
                <MdOutlineAddAPhoto  style={{height: 25, width: 25}}/>
            </label>
           {/* <input type="submit" value="Upload File" />*/}
        </form>
</div>
    )
};

export default Form;