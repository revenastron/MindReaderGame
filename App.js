import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'
import Page4 from './Page4.js'
import Page5 from './Page5.js'
import Result from './Result.js'

const Drawer = createStackNavigator();


function Splash({ navigation }) {

  setTimeout(()=>{
    navigation.replace('Qn1')
  },2500)
  
    return (
      <View>
        <StatusBar hidden={true} />
       
      <Image style={{width:"100%",height:'100%'}} source={require('./assets/splash1.jpg')} />
       
      </View>
    );
  }

  function Info({ navigation }) {
    
      return (
        <View style={{flex:1,backgroundColor:'#2d3f4e'}}>
          <StatusBar hidden={true} />
         
        <Text style={{marginTop:80,textAlign:'center',marginHorizontal:20,alignSelf:'center',color:'#fff'}}>Pick any name from the famous cricketers list shown and keep that in your mind. On the next following pages set of names from that list will be shown, you have to look through the names carefully and tell us whether you can see your choosen name in that or not. The trick relies on your responses only. finally press the reveal button to see the results.</Text>


        <TouchableOpacity style={{
                        backgroundColor:"#75E6DA",
                        position:'absolute',
                        bottom:40,
                        right:30,
                        width:'20%',
                        paddingVertical:14,
                        marginHorizontal:10,
                        alignItems:'center',
                        borderRadius:10,
                        shadowColor: '#000',
                            shadowOffset: { width: 11, height: 2},
                            shadowOpacity: 1,
                            shadowRadius: 4,
                            elevation: 5}}  onPress={() =>
                                      navigation.navigate('Qn1')
                                    }>
                        <Text style={{fontWeight:'bold'}}>←</Text>
                    </TouchableOpacity> 
        </View>
      );
    }

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Qn1" component={Page1} />
        <Drawer.Screen name="Qn2" component={Page2} />
        <Drawer.Screen name="Qn3" component={Page3} />
        <Drawer.Screen name="Qn4" component={Page4} />
        <Drawer.Screen name="Qn5" component={Page5} />
        <Drawer.Screen name="Result" component={Result} />
        <Drawer.Screen name="Info" component={Info} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

