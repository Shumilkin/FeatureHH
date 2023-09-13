import React from 'react';
import {withFormik} from 'formik';
import {useState} from 'react'
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import s from "../messages.module.css";

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
        /* <div className={"d-flex"}>
             <Form.Control  placeholder="Search ..."  type="textarea"
                            name="name" className={"p-1"}/>
             <Button className={s.search} variant="primary" type="submit">
                 Go
             </Button>
         </div>*/

        <form onSubmit={handleSubmit}>
            <div className={"d-flex"}>
               {/* <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="message"
                />*/}
                <Form.Control placeholder="Новое собщение" type="textarea"
                              name="name" onSubmit={handleSubmit} className={"p-1"} onChange={handleChange}
                              onBlur={handleBlur} value={values.name}
                              name="message"/>
                {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
                <Button className={s.search} variant="primary" type="submit">
                    Отправить
                </Button>
              {/*  <button type="submit">Submit</button>*/}
            </div>
        </form>

    );
};

const MessagesForm = withFormik({

    mapPropsToValues: (props) => ({name: props.status}),
    // Custom sync validation


    handleSubmit: (values, {props, setSubmitting}) => {
        let data = {messageData: values.message, value: props.value}
        props.setDialogsMessage(data)
        props.setCount2(props.count2 + 1)

    },

    displayName: 'MessageForm',
})(MyForm);
export default MessagesForm