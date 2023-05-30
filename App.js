import React, { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const App = () => {
  const sites = [{ url: "https://www.sozcu.com.tr/", title: "Sözcü" },
  { url: "https://www.haberler.com/", title: "Haberler.com" },
  { url: "https://www.haberturk.com/", title: "Habertürk" },
  { url: "https://www.ensonhaber.com/", title: "En Son Haber" },
  { url: "https://www.memurlar.net/", title: "Memurlar.net" },
  { url: "https://www.fox.com.tr/fox-haber", title: "Fox Haber" },
  { url: "https://www.cnnturk.com/", title: "CNN Türk" },
  { url: "https://www.cumhuriyet.com.tr/", title: "Cumhuriyet" },
  { url: "https://tr.euronews.com/", title: "Euronews" },
  ];
  const drawer = useRef(null);
  const [url, setUrl] = useState("https://www.sozcu.com.tr/");
  const buttonList = sites.map((site, index) =>
    <Pressable
      key={index}
      style={{ margin: 10, backgroundColor: '#2196F3', borderRadius: 2 }}
      onPress={() => {
        setUrl(site.url)
        drawer.current.closeDrawer()
      }}
    >
      <Text style={{ fontSize: 30, textAlign: 'center', color: "white" }}>{site.title}</Text>
    </Pressable>

  )

  const navigationView = () => (
    <View>
      <Text style={styles.paragraph}>Menü</Text>
      {buttonList}
    </View>
  );

  return (

    <DrawerLayoutAndroid
      style={{ marginTop: 40 }}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View>
        <Button
          title="Menü"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
      <WebView
        style={{ left: 0, top: 0, right: 0 }}
        source={{ uri: url }}
      />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;