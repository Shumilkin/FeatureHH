
import {profileApi} from "../Api/api";
import {getProfileStatus} from "./profile-reduser";
import {setAuthData, setIsAuth} from "./auth-reducer";
const SET_TOTALITEMS_DATA = 'SET_TOTALITEMS_DATA'

const SET_BOOKS_DATA = 'SET_BOOKS_DATA'
const SET_USERS_DATA = 'SET_USERS_DATA'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const FOLLOW_IS_DONE = 'FOLLOW_IS_DONE'
const UNFOLLOW_IS_DONE = 'UNFOLLOW_IS_DONE'
const SET_SEARCH_NAME = 'SET_SEARCH_NAME'
const SET_PAGE = 'SET_PAGE'
const SET_FRIEND = 'SET_FRIEND'
const SET_FRIEND_NUMBER = 'SET_FRIEND_NUMBER'

const initialState = {
    userId: 1,
    count: 10,
    page: 1,
    friend: null,
    users: [],
    totalCount: 0,
    searchName: '',
    friensNumber:0,
    totalItems:''



}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOTALITEMS_DATA:
            return {...state, totalItems: action.data.totalItems}
        case SET_BOOKS_DATA:
            return {...state, books: action.data}
        case SET_USERS_DATA:
            return {...state, users: action.data}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case FOLLOW_IS_DONE:
            return {...state, users: state.users.map(user => {if( user.id == action.userId)
                {return {...user, followed:true}}
                    return user
                })}
        case UNFOLLOW_IS_DONE:
            return {...state, users: state.users.map(user => {if( user.id == action.userId)
                {return {...user, followed:false}}
                    return user
                })}
        case SET_SEARCH_NAME:
            return {...state, searchName: action.name}
        case SET_PAGE:
            return {...state, page: action.page}
        case SET_FRIEND:
            return {...state, friend: action.data}
        case SET_FRIEND_NUMBER:
            return {...state, friendNumber: action.data}
        default:
            return state
    }
}
export const setUsersData = (data) => ({type: SET_USERS_DATA, data});
export const setTotalItemsData = (data) => ({type: SET_TOTALITEMS_DATA, data});



export const setBooksData = (data) => ({type: SET_BOOKS_DATA, data});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const followIsDone = (userId) => ({type: FOLLOW_IS_DONE, userId});
export const unfollowIsDone = (userId) => ({type: UNFOLLOW_IS_DONE, userId});
export const setSearchName = (name) => ({type: SET_SEARCH_NAME, name});
export const setFriend = (data) => ({type: SET_FRIEND, data});
export const setFriendNumber = (data) => ({type: SET_FRIEND_NUMBER, data});

export const setPage = (page) => ({type: SET_PAGE, page});

export const getBooksData = (name) => (dispatch) => {

    profileApi.getBooks(name)
        .then(data => {
            if(data.resultCode == 0){ dispatch(setBooksData(data))}
            dispatch(setUsersData(data.items))
            dispatch(setTotalItemsData(data))
        })
}







export const getUsersData = (pageSize, currentPage, term = initialState.searchName, friend) => (dispatch) => {

    profileApi.users(pageSize, currentPage, term , friend )
        .then(data => {

            dispatch(setSearchName(term))
            dispatch(setPage(currentPage))
            dispatch(setUsersData(data.items))
            dispatch(setTotalCount(data.totalCount))

        })
    profileApi.users(10, 1, "" , true )
        .then(data => {
            dispatch(setFriendNumber(data.totalCount))
        })
}





export const followUser = (userId) => (dispatch) => {

    profileApi.follow(userId)
        .then(data => {
            if(data.resultCode == 0){dispatch(followIsDone(userId))}

        })
}
export const unfollowUser = (userId) => (dispatch) => {

    profileApi.unfollow(userId)
        .then(data => {
            if(data.resultCode == 0){ dispatch(unfollowIsDone(userId))}

        })
}




