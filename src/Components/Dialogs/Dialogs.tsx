import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessagesType} from "../../redux/state";


type DialogsType = {
    dialogs: DialogType[]
    messages: MessagesType[]
}

export const Dialogs = (props:DialogsType)=>{

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)//массив промапеных элементов dialogs
    let messaggesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)//массив промапеных элементов messages

    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              {dialogsElements}
          </div>
          <div className={s.messages}>
              {messaggesElements}
          </div>
      </div>
    );
}
;







