import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import {CHATGPT_API_KEY} from '@env';

const apiKey = CHATGPT_API_KEY;
const BASE_URL = 'https://api.openai.com/v1/chat/completions';

function ChatScreen()  {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello World! I am Chatbox built by Dron Vyas. How can I assist you?',
        createdAt: new Date(),
        user: { _id: 2, name: 'Chatbot' },
      },
    ]);
  }, []);

  const handleSendMessage = async (messages = []) => {
    const userMessage = messages[0].text;
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    try {
        const response = await axios.post(
            BASE_URL,
            {
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'user', content: userMessage },
                { role: 'assistant', content: 'Hi, I am your Chatbot.' },
              ],
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
              },
            }
          );

      const botReply = response.data.choices[0].message.content;
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(36).substring(7),
            text: botReply,
            createdAt: new Date(),
            user: { _id: 2, name: 'Chatbot' },
          },
        ])
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSendMessage}
      user={{
        _id: 1,
      }}
    />
  );
};
export default ChatScreen;
