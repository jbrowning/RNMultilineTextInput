# RNMultilineTextInput

This is a demonstration of a bug in the React Native TextInput component where the first typed character is ignored after the input is cleared.

To start follow the usual steps for running on the iOS simulator:

```
$ yarn && (cd ios && bundle exec pod install)
$ npm run ios
```

To recreate the issue, enter any text, press the "Clear" button, and then type another character. Notice that that the first character typed after clearing will not trigger the `onChangeText` callback and "State" will remain empty. Clearing the input by other means such as setting the `value` prop to an empty string or `null` results in similar behavior.

The `onChangeText` callback will only be triggered after a 2nd character is typed or if the software keyboard is dismissed.

Logs will also indicate that a 'Backspace' event is received by the `onKeyPress` callback after the event for the typed key.
