/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const textInputInitialValue = '';

function SectionDescription({children}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  );
}

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [textInputValue, setTextInputValue] = useState(textInputInitialValue);
  const textInputRef = useRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        alwaysBounceVertical={false}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Multiline Input Clearing Bug">
            <TextInput
              ref={textInputRef}
              multiline
              placeholder="Enter some text"
              onChangeText={setTextInputValue}
              onKeyPress={e => {
                console.log('onKeyPress received with key:', e.nativeEvent.key);
              }}
              style={styles.textInput}
            />
          </Section>
          <Section>
            <Text>State: {textInputValue}</Text>
          </Section>
          <Section>
            <Button
              title="Clear"
              onPress={() => textInputRef.current.clear()}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    fontSize: 16,
    padding: 8,
    marginTop: 16,
    borderColor: '#eeeeee',
    borderWidth: 1,
  },
});

export default App;
