import * as WebBrowser from 'expo-web-browser';
import { Alert } from 'react-native';

export default function (url) {
  return WebBrowser.openBrowserAsync(url, {
    enableBarCollapsing: true,
    presentationStyle: 'automatic',
  }).catch((e) => {
    Alert.alert('An error occured', e.message || e.toString());
  });
}
