import {v1} from "uuid";

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
export type stateType = {
    profilePage: {
        posts: postsType[]
    }
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessagesType[]
    }
}

let state: stateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'hi, how are you?', likesCount: 20},
            {id: v1(), message: 'It`s my first post', likesCount: 15},
            {id: v1(), message: 'How could happen?', likesCount: 0},
            {id: v1(), message: 'You`re the best', likesCount: 30},
        ] as postsType[],
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Vadim'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Valera'},
        ] as DialogType[],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you Vasya?'},
            {id: v1(), message: 'Yo'},
        ] as MessagesType[],
    },
}

export default state