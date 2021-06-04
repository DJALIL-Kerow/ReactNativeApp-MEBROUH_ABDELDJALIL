
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
export default class App extends React.Component {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://192.168.1.50:1348/users');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
       <Text style={{backgroundColor:'#a9a9a9', padding:10,margin:10,textAlign: 'center',fontWeight: 'bold',fontSize: 18,}} >Welcome To MySql List</Text>

       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#878787',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>Name: {item.name}</Text>
          <Text style={{color:'#fff'}}>Email: {item.email}</Text>
          <Text style={{color:'#fff'}}>Gender: {item.gender}</Text>
          <Text style={{color:'#fff'}}>Job: {item.job}</Text>
         </View>

       }

       />
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
