import React from 'react';
import {withFormik} from 'formik';
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import s from "../Messages/messages.module.css";
const MyForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className={"d-flex"}>
            <Form.Control placeholder="Введите имя ..." type="textarea"
                          name="name" onSubmit={handleSubmit} className={"p-1"} onChange={handleChange}
                          onBlur={handleBlur} value={values.name}
                          name="name"/>
            {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            <Button className={s.search} variant="primary" type="submit">
                Найти
            </Button>
            {/*<input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
            />
            {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
            <button type="submit">Submit</button>*/}
            </div>
        </form>
    );
};

const FriendsForm = withFormik({
    

    mapPropsToValues: (props) => ({name: props.status}),
    // Custom sync validation
    validate: values => {
      /*  const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;*/
    },

    handleSubmit: (values, {props, setSubmitting}) => {

        props.getUsersData(10, 1 , values.name)
props.setPage(1)
props.setFriend(null)
    },

    displayName: 'BasicForm',
})(MyForm);
export default FriendsForm