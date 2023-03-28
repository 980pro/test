import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://effulgent-moonbeam-67b397.netlify.app/' }}
    />
  );
}