/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const CursorDemo = () => {
  const [text, setText] = useState('long hello world');
  const amountInput = useRef<TextInput>(null);
  return (
    <View>
      <TextInput
        ref={amountInput}
        value={text}
        onChangeText={setText}
        onFocus={() => {
          amountInput.current?.setNativeProps({
            selection: {
              start: text.length,
              end: text.length,
            },
          });
        }}
      />
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CursorDemo />
    </SafeAreaView>
  );
};

export default App;
