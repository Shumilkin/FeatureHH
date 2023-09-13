import {Formik} from "formik";
import * as Yup from "yup";
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(4, "Password must be at least 8 characters"),
});

function LoginPageForm(props) {

    return (
        <>
            {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <Formik
                validationSchema={schema}
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    let data = {email: values.email, password: values.password, rememberMe: true, captcha: false}
                    props.getAuthData(data)
                }}

            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <div className="login">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form onSubmit={handleSubmit}>
                                <span >Адрес электронной почты</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="msnet@mail.ru"
                                    className="form-control inp_text mt-2"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <div>Введите пароль</div>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="******"
                                    className="form-control mt-2"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                    {props.errorMessage.serverMessage}
                                </p>
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                          <input type="checkbox"/> <span>Запомнить меня</span>
                                    </div>
                                    <div className="col-4 ">
                                        <i  className="text-right">Забыли пароль?</i>
                                    </div>
                                </div>


                                <div><img src={props.captcha}/></div>

                                {/* Click on submit button to submit the form */}
                                {/*props.props.getAuthData({email: 'tut.by', password:'111111111', rememberMe:true, captcha:'true'*/}
                               {/* <button type="submit">Login</button>*/}
                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="primary" size="lg">
                                       Войти
                                    </Button>

                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    );
}

export default LoginPageForm;