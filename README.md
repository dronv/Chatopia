# Chatopia

Chatopia is a React Native app that allows users to chat with a chatbot powered by the GPT-3.5 Turbo language model. Users can also use the Translate feature to translate text between different languages.( Current supporting only English to Gujarati(India)).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Introduction

Chatopia is an interactive chat application built with React Native. It leverages the power of GPT-3.5 Turbo from OpenAI to provide intelligent responses to user queries. The app also includes a Translate feature that enables users to translate text to various languages using the Google Translate API.

## Features

- Chat with an AI-powered chatbot using GPT-3.5 Turbo.
- Translate text to various languages with the Google Translate API.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Chatopia.git
cd Chatopia
``` 
2. Install dependencies:
```bash
npm install
```
3. Start the development server:

```bash
npm start
```
Scan the QR code with the Expo Go app on your mobile device to run the app.

4. Replace API Keys:

In the project, you'll find placeholder variables for API keys that need to be replaced with your actual API keys. Open the following files and replace the placeholders:

For ChatScreen, replace YOUR_CHATGPT_API_KEY with your GPT-3.5 Turbo API key in ChatScreen.js.

For TranslateScreen, replace YOUR_GOOGLE_API_KEY with your Google Translate API key in TranslateScreen.js.

## Usage
ChatScreen
The ChatScreen component allows users to engage in conversations with a chatbot. Users can send messages, and the chatbot responds with relevant answers based on the GPT-3.5 Turbo model.

TranslateScreen
The TranslateScreen component lets users input text and choose a source and target language. It then translates the text using the Google Translate API.

## Screenshots
<img width="512" alt="Screenshot 2023-07-26 005841" src="https://github.com/dronv/Chatopia/assets/41694884/e9f2e629-fb0a-4da2-94fb-6d5d6613871d">
<img width="514" alt="Screenshot 2023-07-26 010138" src="https://github.com/dronv/Chatopia/assets/41694884/b20007b1-11a0-4864-8573-bcd4f9a7d315">
<img width="515" alt="Screenshot 2023-07-26 010200" src="https://github.com/dronv/Chatopia/assets/41694884/ac7a73d3-2365-4b8a-a1a9-20758e8d67de">

