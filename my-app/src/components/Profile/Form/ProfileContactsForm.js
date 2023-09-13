import React from 'react';
import {withFormik, useField, Formik} from 'formik';

import {SocialIcon} from "react-social-icons";
import s from "./../profile.module.css"

const MyForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    let list = Object.assign({}, props.list)
    /*   let a = (props) => {return {...props, list:'list'}}
       props = {...props , list: 'list' }*/
    let contacts = ''
    for (var key in list) {
        const site = "https://" + key + ".com"
        const siteInfo2=(list[key]);

        contacts = [...contacts,

            <div className={"row  "}>
                <div className={"col-1 m-1"}>
                    <SocialIcon style={{height: 50, width: 50}} url={site}/>
                </div>
                <div className={"col-6  m-2"}>
                    <div className={s.contactsInfoContainer}>
                        <div className={"input-group "}>
                            <span className="input-group-text" id="basic-addon1">  {key}</span>
                            <input className={"form-control"}
                                   type="text"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder={siteInfo2}
                                /*value={list[key]}*/
                                   name={key}
                            />
                           
                        </div>
                    </div>
                </div>
            </div>
            /*<div >
            <i>{key}</i>
            <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={list[key] != null ? list[key] : key}
            value={values[`${key}`]}
            name={key}
        /></div>*/]
    }
    return (
        <Formik initialValues={list}>
            <form onSubmit={handleSubmit}>
                {/*            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vk}
                name="vk"
            />

            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.github}
                name="github"
            />*/}
                {/* {errors.name && touched.name && <div id="feedback">{errors.name}</div>}*/}
                {contacts}
                <div className="d-grid gap-2 m-4">
                    <button type="submit" className="btn btn-outline-primary ">Submit</button>
                </div>
            </form>
        </Formik>
    );
};
const ProfileContactsForm = withFormik({
    mapPropsToValues: (props) => (props.list),
    // Custom sync validation
    /*   validate: values => {
           const errors = {};

           if (!values.name) {
               errors.name = 'Required';
           }

           return errors;
       },*/
    handleSubmit: (values, {props, setSubmitting}) => {
        /*let contactsForSet = {}
        for (var key in list) {
            contactsForSet = {...contactsForSet, key: values.key}
        }*/
        props.setCount(0)
        let listOfContacts = {}
        let list2 = props.list
        for (var key in list2) {
            let key2 = key
            Object.assign(listOfContacts, {[key]: values[key2]});
            /*listOfContacts = { [key] :values[key2]}*/
        }

        props.setProfileContacts({
            lookingForAJob: true,
            lookingForAJobDescription: "test",
            fullName: "shumila",
            aboutMe: "test",
            contacts: listOfContacts
        })
    },

    displayName: 'BasicForm',
})(MyForm);
export default ProfileContactsForm