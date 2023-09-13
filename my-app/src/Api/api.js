import axios from "axios";
import React from "react";


const instance = axios.create({
   /* withCredentials: false,*/
    baseURL: 'https://www.googleapis.com/books/v1',
    headers: {
       /* 'API-KEY': 'AIzaSyDpdqqbi_66_JtKS0yj9jp18SwoWneQlGE',*/
        /* "Content-Type": "multipart/form-data"*/
    },
});

export const profileApi = {
    getBooks(name) {
        return instance.get(`volumes?q=${name}&key=AIzaSyDpdqqbi_66_JtKS0yj9jp18SwoWneQlGE`).then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    setProfile(profile) {
        return instance.put(`/profile`, profile,).then(response => {

            return response.data
        })

    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    setStatus(status) {
        return instance.put(`/profile/status`, {status: status}).then(response => {
            return response.data
        })
    },
    setPhoto(image) {
        return instance.put(`/profile/photo`, {image} , {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(response => {

            return response.data

        })
    },
    loginMe(data) {
        return instance.post(`/auth/login`, data).then(response => {

            return response.data

        })
    },
    logoutMe() {
        return instance.delete(`/auth/login`).then(response => {
            return response.data
        })
    },
    authMe() {
        return instance.get(`/auth/me`).then(response => {
            return response.data
        })
    },

    captcha() {
        return instance.get(`/security/get-captcha-url`).then(response => {
            return response.data
        })
    },
    users(count = 10, page = 1, term = '' , friend = null) {
        return instance.get(`/users?count=${count}&page=${page}&term=${term}&friend=${friend}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`, null).then(response => {
            return response.data
        })
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`, null).then(response => {
            return response.data
        })
    },

}