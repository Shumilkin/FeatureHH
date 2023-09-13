import React from 'react';
import { withFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
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
                <Form.Control  placeholder="Новый пост"  type="textarea"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              name="name" className={"p-1"}/>
                <Button variant="primary" type="submit">
                   Добавить
                </Button>
            </div>

        </form>
    );
};

const ProfilePostsForm = withFormik({
    mapPropsToValues: () => ({ name: '' }),
    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, {props, setSubmitting }) => {
        props.data.setUserProfilePost(values)

    },

    displayName: 'StatusForm',
})(MyForm);
export default ProfilePostsForm