import {profileApi} from "../Api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_IS_NOT_AUTH = 'SET_IS_NOT_AUTH'
const SET_CAPTCHA_DATA = 'SET_CAPTCHA_DATA'
const initialState = {
    isAuth: true,
    profileId: 24842,
    serverMessage: '',
    captcha:''

}
export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, profileId: 420, serverMessage: action.data.messages[0] }
        case SET_IS_AUTH:
            return { ...state,  isAuth: true}
        case SET_IS_NOT_AUTH:
            return { ...state,  isAuth: false}
        case SET_CAPTCHA_DATA:
            return { ...state,  captcha: action.data}

        default:
            return state
    }
}

export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data });
export const setIsAuth = () => ({ type: SET_IS_AUTH});
export const setIsNotAuth = () => ({ type: SET_IS_NOT_AUTH});
export const setCaptcha = (data) => ({ type: SET_CAPTCHA_DATA, data});

export const getAuthData = (data) => (dispatch) => {
    profileApi.loginMe(data)
        .then(data => {

            dispatch(setAuthData(data))
           if(data.resultCode == 0) {dispatch(setIsAuth())}

        })
}
export const takeAuthData = () => (dispatch) => {
    profileApi.authMe()
        .then(data => {

            if(data.resultCode == 0) {dispatch(setIsAuth())}

        })
}
export const takeLogoutData = () => (dispatch) => {
    profileApi.logoutMe()
        .then(data => {
            if(data.resultCode == 0) {dispatch(setIsNotAuth())}

        })
}
export const takeCaptcha = () => (dispatch) => {
    profileApi.captcha()
        .then(data => {

            dispatch(setCaptcha(data.url))

        })
}
