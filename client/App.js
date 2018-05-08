import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class App extends React.Component {
    
fetchData(){

	alert("get data")

}

  
    
        
  render() {
    return (
      <View style={styles.container}>
        <Text>Demo page</Text>

 <Button onPress={this.fetchData} title="Learn More" color="#841584"
 Label="click"/>
      
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
