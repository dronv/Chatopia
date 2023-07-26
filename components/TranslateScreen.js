import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import {GOOGLE_API_KEY} from '@env';


const TranslateScreen = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en'); 
  const [targetLanguage, setTargetLanguage] = useState('gu');

  const translateText = async () => {
    try {
       const apiKey = GOOGLE_API_KEY;
      const encodedText = encodeURIComponent(textToTranslate); // Encode the text
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: encodedText, // Use the encoded text in the API request
            source: sourceLanguage,
            target: targetLanguage,
            key: apiKey,
          },
        }
      );

      const translatedText =
        response.data.data.translations[0].translatedText;
      setTranslatedText(translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, padding: 10 }}
        placeholder="Enter text to translate"
        onChangeText={setTextToTranslate}
      />
      <Button title="Translate" onPress={translateText} />
      <Text style={{ marginTop: 20 }}>Translated Text:</Text>
      <Text style={{color: 'black', fontSize: 40}}>{translatedText}</Text>
    </View>
  );
};

export default TranslateScreen;

