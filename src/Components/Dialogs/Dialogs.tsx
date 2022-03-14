import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



type DialogItemType = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
    )
}



type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
      <div className={s.dialog}>{props.message}</div>
    )
}



export const Dialogs = () => {
    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <DialogItem name={'Vadim'} id={'1'}/>
              <DialogItem name={'Sveta'} id={'2'}/>
              <DialogItem name={'Andrew'} id={'3'}/>
              <DialogItem name={'Valera'} id={'4'}/>
              <DialogItem name={'Victor'} id={'5'}/>
          </div>
          <div className={s.messages}>
              <Message message={'Hi'}/>
              <Message message={'How is your'}/>
              <Message message={'How you could?'}/>
          </div>
      </div>
    );
};

