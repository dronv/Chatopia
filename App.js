import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import ChatScreen from './components/ChatScreen.js';
import TranslateScreen from './components/TranslateScreen.js';
import { dotenv } from 'react-native-dotenv';

const Tab = createBottomTabNavigator();
enableScreens();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Translate') {
              iconName = focused ? 'language' : 'language-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Translate" component={TranslateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
