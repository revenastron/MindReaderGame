import React, { Component } from 'react';
import { Text, View,StatusBar,TouchableOpacity,Image ,FlatList } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class Page2 extends Component {  

     fn=()=>{  
        this.props.navigation.navigate('Qn3',{count:0})
}
 fn1=()=>{  
        this.props.navigation.navigate('Qn3',{count:1})
}

  
render() {  

  const data=[
    {id: 1, title:'Faf du plesis'},
    {id: 2, title:'Rohit'},
    {id: 3, title:'Shane Watson'},
    {id: 4, title:'AB de Villiers'},
    {id: 5, title:'Virat Kholi'},
    {id: 6, title:'Jos Buttler'},
    {id: 7, title:'Bhuvaneshwar Kumar'},
    ]
    
   return (  
      <LinearGradient style={{flex:1, paddingTop:30}} colors={["#05445E","#189AB4" ]}>
          <StatusBar hidden={true} />

               <View>
                 <Text style={{fontSize:25,margin:10,marginTop:1,textAlign:"center",color:"#F2eef6",fontWeight:"bold"}}>Is there a name in this page you memorised ealier?</Text>
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
        
                renderItem={({item}) => <Text style={{fontSize:22,color:"#000",marginLeft:35,marginTop:11}}>{item.id}) {item.title}</Text>}
              /></View>
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
                      elevation: 5}} onPress={this.fn1}>
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
                      elevation: 5}} onPress={this.fn}>
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