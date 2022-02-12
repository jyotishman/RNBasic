import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  SectionList,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import pageStyles from './styles';
import BasicStyleComponents from './basicStyleComponents';
import RNForm from './rnForm';
import Apicall from './apicall';
const App = () => {
  const data = [
    {
      title: 'A',
      data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'],
    },
    {
      title: 'B',
      data: [
        'BEST MEN',
        'BEYOND JUSTICE',
        'BLACK GUNN',
        'BLOOD RANCH',
        'BEASTIES',
      ],
    },
    {
      title: 'C',
      data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE'],
    },
  ];
  return (
    <SafeAreaView style={pageStyles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#60d7f7" />
      {/* <View style={page.container}>
        <SectionList
          sections={data}
          renderItem={({item}) => (
            <Text style={page.itemContainer}>{item}</Text>
          )}
          renderSectionHeader={({section}) => (
            <Text style={page.heading}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
        <Button title="hello"></Button>
        <Pressable>
          <Text style={page.customButton}>Submit button</Text>
        </Pressable>
        <TouchableOpacity>
          <Text style={page.customButton}>Submit button</Text>
        </TouchableOpacity>
      </View> */}
      {/* <BasicStyleComponents/> */}
      {/* <RNForm /> */}
      <Apicall />
    </SafeAreaView>
  );
};
const page = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#999',
    flex: 1,
  },
  textColor: {
    color: '#fff',
  },
  heading: {
    backgroundColor: 'black',
    color: '#fff',
  },
  itemContainer: {
    backgroundColor: 'red',
  },
  customButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
  },
});
export default App;

