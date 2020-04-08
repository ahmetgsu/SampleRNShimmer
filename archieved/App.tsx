/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  FlatList,
} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3000);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="lightgreen" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          ListHeaderComponent={() => (
            <Text style={styles.textHeader}>Kullanıcı Listesi</Text>
          )}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item) => item.toString()}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({}) => (
            <View style={styles.listItem}>
              <ShimmerPlaceHolder
                style={styles.image}
                autoRun
                visible={isVisible}>
                <Image
                  source={{
                    uri: 'https://avatars3.githubusercontent.com/u/1326963',
                  }}
                  style={styles.image}
                />
              </ShimmerPlaceHolder>
              <View style={styles.infoContainer}>
                <ShimmerPlaceHolder
                  style={{...styles.shimText, width: 75}}
                  autoRun
                  visible={isVisible}>
                  <Text style={styles.text}>id: 1326963</Text>
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                  style={{...styles.shimText, width: 175}}
                  autoRun
                  visible={isVisible}>
                  <Text style={styles.text}>username: ozcanzaferayan</Text>
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                  style={{...styles.shimText, width: 240}}
                  autoRun
                  visible={isVisible}>
                  <Text style={styles.text}>node_id: MDQ6VXNlcjEzMjY5NjM=</Text>
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                  style={{...styles.shimText, width: 260}}
                  autoRun
                  visible={isVisible}>
                  <Text style={styles.text}>
                    url: https://github.com/ozcanzaferayan
                  </Text>
                </ShimmerPlaceHolder>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  text: {
    fontSize: 15,
  },
  shimText: {
    height: 15,
    marginTop: 3,
  },
  infoContainer: {
    marginStart: 20,
    marginTop: 0,
  },
  seperator: {
    height: 16,
  },
  textHeader: {
    fontSize: 36,
    marginBottom: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default App;
