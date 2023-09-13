import React from 'react';
import {Field, withFormik} from 'formik';
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
            <div className={"d-flex"}>

                <span>categories</span>
                <Field as="select" name="categories">
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </Field>
                <span>sorting by</span>
                <Field as="select" name="sortingBy">
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>

                </Field>
               {/* <Form.Control placeholder="Введите имя ..." type="text"
                              list="dish"
                              name="categories" onSubmit={handleSubmit} className={"p-1"} onChange={handleChange}
                              onBlur={handleBlur} value={values.name}
                             />*/}


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
props.getBooksData(values.name)
   /*     props.getUsersData(10, 1 , values.name)
props.setPage(1)
props.setFriend(null)*/
    },

    displayName: 'BasicForm',
})(MyForm);
export default FriendsForm