import {v1} from "uuid";

let rerenderEntireTree = (state: stateType) => {
    console.log(state)
}

export type postsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type dialogsPageType = {
    dialogs: DialogType[]
    messages: MessagesType[]
}
export type profilePageType = {
    newPostText: string
    posts: postsType[]
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}

let state: stateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: v1(), message: 'hi, how are you?', likesCount: 20},
            {id: v1(), message: 'It`s my first post', likesCount: 15},
            {id: v1(), message: 'How could happen?', likesCount: 0},
            {id: v1(), message: 'You`re the best', likesCount: 30},
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Vadim'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Valera'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you Vasya?'},
            {id: v1(), message: 'Yo'},
        ],
    },
}

export const addPost = () => {

    let newPost: postsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''//nullyfy area after adding post
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {//function render state at every change textarea
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state:stateType) => void) => {
    rerenderEntireTree = observer
}

export default state