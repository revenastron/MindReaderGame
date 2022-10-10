import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView, View, StatusBar,TouchableOpacity,Image ,FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
export default class Page3 extends Component {  

  
    render() {  
         const { count } = this.props.route.params;

         const data=[
          {id: 1, title:'MS Dhoni'},
          {id: 2, title:'Virat Kholi'},
          {id: 3, title:'Rohit'},
          {id: 4, title:'Shane Watson'},
          {id: 5, title:'David Warner'}
          ]

      return (  
          <LinearGradient style={{flex:1, paddingTop:30}} colors={["#05445E","#189AB4" ]}>
            <StatusBar hidden={true} />
               <View>
                <Text style={{fontSize:25,margin:10,textAlign:"center",color:"#F2eef6",fontWeight:"bold"}}>Is there a name in this page you memorised ealier?</Text>
              </View>
             <View style={{borderWidth:5,margin:10,borderColor:"transparent",fontWeight:"bold",borderRadius:20,backgroundColor:"#F2EEF6",
                shadowColor: 'gray',
                    shadowOffset: { width: 2, height: 2},
                    shadowOpacity: 1,
                    shadowRadius: 5,
                    elevation: 5}}>
                        <View>
                <FlatList
                 data={data}
              
                renderItem={({item}) => <Text style={{fontSize:22,color:"#000",marginLeft:35,marginTop:14}}>{item.id}) {item.title}</Text>}
              />
              </View>

               <View style={{display:'flex',flexDirection:'row', marginTop:40}} >
            <TouchableOpacity style={{backgroundColor:"#75E6DA",
                flex:1,
                bottom:10,
                width:'95.5%',
                paddingVertical:14,
                marginHorizontal:10,
                alignItems:'center',
                borderRadius:10,
                shadowColor: '#000',
                    shadowOffset: { width: 11, height: 2},
                    shadowOpacity: 1,
                    shadowRadius: 4,
                    elevation: 5}} onPress={()=>this.props.navigation.navigate('Qn4',{count:count+2})}>
                <Text>YES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                flex:1,
                backgroundColor:"#F86EB4",
                bottom:10,
                width:'95.5%',
                paddingVertical:14,
                marginHorizontal:10,
                alignItems:'center',
                borderRadius:10,
                shadowColor: '#000',
                    shadowOffset: { width: 11, height: 2},
                    shadowOpacity: 1,
                    shadowRadius: 4,
                    elevation: 5}} onPress={()=>this.props.navigation.navigate('Qn4',{count:count})}>
                <Text>NO</Text>
             </TouchableOpacity>
           </View>
          </View>
          <View style={{right:10,position:'absolute',bottom:10,marginLeft:'auto'}}>
              <Image style={{width:120,height:110}}  source={require('./assets/qn3.png')} /></View>
        </LinearGradient>  
      );  
    }  
}