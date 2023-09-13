import {profileApi} from "../Api/api";
import {getUserProfilePost} from "./profile-reduser";

const SET_MESSAGE = 'SET_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

const initialState = {
    dialogsData: [
        {id: 0, user: 'Николай'},
        {id: 1, user: 'Олег'},
        {id: 2, user: 'Иван'},
        {id:3, user: 'Ир04ка'},
        {id: 4, user: 'Антон'},
        {id: 5, user: 'Оля'}
    ],
    messagesData: [
        {
            id: 1, messages: [
                {messageId: 1, message: 'Истинный! Когда я был счастлив, что Мстители навсегда избавились от Таноса, в следующий момент я выплакал глаза, увидев, что Железный Человек пожертвовал собой, чтобы спасти мир и всех остальных.'},
                {messageId: 2, message: 'Моя сестра повела меня посмотреть фильм, как только он вышел. И я, и моя сестра с детства были большими фанатами Мстителей.'},
                {messageId: 3, message: ' Ага, понятно. Фильм оправдал все ожидания зрителей после просмотра трейлера. На самом деле, я бы сказал, что фильм превзошел все ожидания.'},
                {messageId: 4, message: 'Мы должны использовать эту поездку, чтобы узнать как можно больше о местах, которые мы посещаем.'}]

        },
        {
            id: 2, messages: [
                {messageId: 1, message: 'Эй, Марвин. Мои выходные были отличными. Я посмотрел отличный фильм.'},
                {messageId: 2, message: 'Да неужели? Как назывался фильм, который ты смотрел?'},
                {messageId: 3, message: ' Я смотрел Мстители: Финал. Это последний фильм о Мстителях.'}
            ]


        },
        {
            id: 3, messages: [
                {messageId: 1, message: 'Мы должны использовать эту поездку, чтобы узнать как можно больше о местах, которые мы посещаем.'},
                {messageId: 2, message: 'Мне придется просить денег у отца сегодня же.'},
                {messageId: 3, message: ' Именно поэтому нам еще более необходимо отправиться в тур. Это будет прекрасное воспоминание.'}]
        },
        {
            id: 4, messages: [
                {messageId: 1, message: 'Истинный! Когда я был счастлив, что Мстители навсегда избавились от Таноса, в следующий момент я выплакал глаза, увидев, что Железный Человек пожертвовал собой, чтобы спасти мир и всех остальных.'},
                {messageId: 2, message: 'Моя сестра повела меня посмотреть фильм, как только он вышел. И я, и моя сестра с детства были большими фанатами Мстителей.'},
                {messageId: 3, message: ' Ага, понятно. Фильм оправдал все ожидания зрителей после просмотра трейлера. На самом деле, я бы сказал, что фильм превзошел все ожидания.'},
                {messageId: 4, message: 'Мы должны использовать эту поездку, чтобы узнать как можно больше о местах, которые мы посещаем.'}]
        },
        {
            id: 5, messages: [
                {messageId: 1, message: 'Мы должны использовать эту поездку, чтобы узнать как можно больше о местах, которые мы посещаем.'},
                {messageId: 2, message: 'Мне придется просить денег у отца сегодня же.'},
                {messageId: 3, message: ' Именно поэтому нам еще более необходимо отправиться в тур. Это будет прекрасное воспоминание.'}]
        },
        {
            id: 6, messages: [
                {messageId: 1, message: 'Эй, Марвин. Мои выходные были отличными. Я посмотрел отличный фильм.'},
                {messageId: 2, message: 'Да неужели? Как назывался фильм, который ты смотрел?'},
                {messageId: 3, message: ' Я смотрел Мстители: Финал. Это последний фильм о Мстителях.'}]
        },
        {
            id: 7, messages: [
                {messageId: 1, message: 'Мы должны использовать эту поездку, чтобы узнать как можно больше о местах, которые мы посещаем.'},
                {messageId: 2, message: 'Мне придется просить денег у отца сегодня же.'},
                {messageId: 3, message: ' Именно поэтому нам еще более необходимо отправиться в тур. Это будет прекрасное воспоминание.'}]
        }
    ]

}
export default function messagesReducer(state = initialState, action) {
    const initialState2 = {
        dialogsData: [
            {id: 0, user: 'Nikolay'},
            {id: 1, user: 'OLeg'},
            {id: 2, user: 'Ivan'}
        ],
        messagesData: [
            {
                id: 1, messages: [
                    {messageId: 1, message: 'lol2'},
                    {messageId: 2, message: 'kek2'},
                    {messageId: 2, message: 'kek2'}]
            },
            {
                id: 2, messages: [
                    {messageId: 1, message: 'ppp'},
                    {messageId: 2, message: 'aaa'}]
            },
            {
                id: 3, messages: [
                    {messageId: 1, message: '123'},
                    {messageId: 2, message: '678'}]
            },
        ]

    }
    switch (action.type) {

        case SET_MESSAGE:
            const listValue = action.data.value
            const messageData = action.data.messageData
            const lastId = state.messagesData[listValue].messages.at(-1).messageId
            let newMessages = [...state.messagesData[listValue].messages,
                {messageId: lastId + 1, message: messageData}]
            state.messagesData[listValue].messages = newMessages
            const newData = {...state.messagesData}
            return {...state, messagesData: newData}
        case DELETE_MESSAGE:
            /*const messageId = action.data.messageId*/
            /*const myIndex = state.messagesData[listValue2].messages.indexOf(messageId)*/
            const listValue2 = action.data.value
            const key = action.data.key
            let newArray = state.messagesData[listValue2].messages.filter(function (f) {
                return f.messageId !==  key
            });
            state.messagesData[listValue2].messages = newArray
            const newData2 = {...state.messagesData}
            return {...state, messagesData: newData2}
        default:
            return state
    }
}

export const getDialogsMessage = (message) => (dispatch) => {
    dispatch(setDialogsMessage(message))
}
export const setDialogsMessage = (messageData, value) => (dispatch) => {
    dispatch(setDialogsMessage2(messageData, value))
}
export const setDialogsMessage2 = (data) => ({type: SET_MESSAGE, data});

export const deleteMessage = (data) => ({type: DELETE_MESSAGE, data});

