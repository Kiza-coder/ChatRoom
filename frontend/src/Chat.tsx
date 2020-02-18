import React, { Fragment } from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import { ChatBoxRead } from './ChatBoxRead';
import { ChatBoxWrite } from './ChatBoxWrite';
import MessageRead from './MessageRead';
import { Form, required, Values, SubmitResult } from './Form';
import { Field } from './Field';

export const Chat: React.FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values);
    submitResult = { success: true };
  };

  //Test Front
  interface Message {
    content: string;
    user: string;
    date: string;
  }
  let message: Message = {
    content: 'Content',
    user: 'User',
    date: '12/12/12',
  };
  let message2: Message = {
    content: 'Content',
    user: 'User',
    date: '12/12zss/12',
  };
  const messages: Message[] = [];
  messages.push(message);
  messages.push(message2);

  //Test

  let submitResult: SubmitResult | undefined;

  return (
    <Fragment>
      <ChatBoxRead>
        {messages.map(message => (
          <MessageRead
            content={message.content}
            user={message.user}
            date={message.date}
            key={message.date}
          />
        ))}
      </ChatBoxRead>
      <ChatBoxWrite>
        <Form
          submitCaption="Send your message"
          onSubmit={handleSubmit}
          submitResult={submitResult}
          validationRules={{
            message: [{ validator: required }],
          }}
          failureMessage="OK"
          successMessage="Wrong"
        >
          <Field name="message" label="" type="TextArea" />
        </Form>
      </ChatBoxWrite>
    </Fragment>
  );
};
export default Chat;
