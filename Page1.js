import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView,SafeAreaView,StatusBar, View,TextInput,TouchableOpacity,Image ,FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class Page1 extends Component {  

 

    render() {  

    

        return (  
            <LinearGradient style={{flex:1,display:'flex', paddingTop:10}} colors={["#552F8F","#7946E0" ]}>
            
             <StatusBar hidden={true} />
              <View>
                      <Text style={{fontSize:25,margin:10,textAlign:"center",color:"#F2eef6",fontWeight:"bold"}}>1.Pick one name from the following.</Text>
              </View>

          


             <View style={{borderWidth:5,marginBottom:10,borderColor:"transparent",marginHorizontal:10,fontWeight:"bold",borderRadius:20,backgroundColor:"#F2EEF6",
  shadowColor: 'gray',
      shadowOffset: { width: 2, height: 2},
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5}}>

<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Info')} style={{borderWidth:2,right:30,margin:9,right:1,borderColor:'#888',zIndex:1,borderRadius:100,position:'absolute'}}>
<Text style={{paddingHorizontal:8, color:'gray'}}>i</Text>
</TouchableOpacity>


 <Text style={{lineHeight:37,fontSize:21,color:"#000",marginLeft:35,paddingBottom:3,marginTop:20}}>
  <Text>
    1) Rohit{'\n'}
2) Virat Kholi{'\n'}
3) Shane Watson{'\n'}
4) David Warner{'\n'}
5) Faf du plesis{'\n'}
6) AB de Villiers{'\n'}
7) MS Dhoni{'\n'}
8) Jos Buttler{'\n'}
9) Jimmy Anderson{'\n'}
10) Bhuvaneshwar Kumar</Text> 
</Text>

<TouchableOpacity style={{backgroundColor:"#F86EB4",
  bottom:10,
  width:'95.5%',
  paddingVertical:5,
  marginHorizontal:10,
  alignItems:'center',
  borderRadius:10,
  marginTop:20,
  shadowColor: 'black',
      shadowOffset: { width: 2, height: 2},
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 5}} onPress={()=>this.props.navigation.navigate('Qn2')}> 

      
      
      <Text style={{color:"#fff",fontWeight:"bold",alignContent:"center",fontSize:25}}>Start</Text>
  </TouchableOpacity>
             </View>
             



             
            </LinearGradient>  
        );  
    }  
}


