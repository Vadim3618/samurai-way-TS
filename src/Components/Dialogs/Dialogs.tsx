import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";


type DialogsType = {
    state: dialogsPageType
}

export const Dialogs = (props: DialogsType) => {

      let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)//массив промапеных элементов dialogs
      let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)//массив промапеных элементов messages

      let newMessageElement = React.createRef<HTMLTextAreaElement>()//переменная ссылающаяся на конкретную эрию
      const addMessage = () => {
          debugger
          let text = newMessageElement.current?.value
          alert(text)
      }

      return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
      );
  }
;







