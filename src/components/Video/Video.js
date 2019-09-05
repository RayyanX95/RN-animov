import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from "react-native-webview";

export default video = (props) => {
  return (
    <View style={styles.webViewContainer}>
      <WebView
        style={styles.webView}
        source={{ uri: props.trailerLink }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  webViewContainer: {
    height: 250,
    width: "115%",
    borderColor: "#4e4c4c77",
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 15
  },
  webView: {
    flex: 1
  },
});
// https://openload.co/f/w61bMBZ2GgU/%5BCimaClub.Com%5D-Madagascar.%7B2005%7D.BluRay.1080p.Arabic.mp4?fbclid=IwAR05qaT5VRUty4apwJrCp6DtQ9Pu85jVAn6FQ3NoJDu0I3_vV1_HCz0R9FQ