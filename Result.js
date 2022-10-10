import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView, View,TextInput,SafeAreaView,StatusBar,TouchableOpacity,Image ,FlatList } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { Bounce } from 'react-native-animated-spinkit'

export default class Result extends Component {  

    constructor(props){
      super(props);
      this.state={
        result:'',
        imgn:'',
        color: false
      }
    }


    render() {  
       const { count, flag } = this.props.route.params;
       const img0 = require('./assets/dw.png')
       const img1 = require('./assets/rs.png')
       const img2 = require('./assets/bk.png')
       const img3 = require('./assets/msd.png')
       const img4 = require('./assets/fd.png')
       const img5 = require('./assets/vk.png')
       const img6 = require('./assets/jb.png')
       const img7 = require('./assets/ja.png')
       const img8 = require('./assets/abd.png')
       const img9 = require('./assets/sw.png')

       const fn=()=>{
         
         if(count==1){
           this.setState({color: true, imgn: img2, result: 'BHUVANESHWAR KUMAR' });
         }
         else if(count==0){
          this.setState({color: true, imgn: null, result: 'False Input' });
        }
         else if(count==2){
           this.setState({ color: true, imgn: img0, result: 'DAVID WARNER' });

         }
         else if(count==3 && flag!=1){
           this.setState({ color: true, imgn: img5, result: 'VIRAT KHOLI' });
         }
         else if(count==4 && flag!=2){
           this.setState({ color: true, imgn: img4, result: 'FAF DU PLESIS' });
         }
         else if(count==5){
           this.setState({ color: true, imgn: img6, result: 'JOS BUTTLER' });
         }
         else if(count==6){
           this.setState({ color: true, imgn: img1, result: 'ROHIT SHARMA' });
         }
         else if(count==7){
           this.setState({ color: true, imgn: img7, result: 'JIMMY ANDERSON' });
         }
         else if(count==8){
           this.setState({ color: true, imgn: img8, result: 'AB DE VILLIERS' });
         }
         else if(count==9){
           this.setState({ color: true, imgn: img3, result: 'MS DHONI' });
         }
         else if(count==10){
           this.setState({ color: true, imgn: img9, result: 'SHANE WATSON' });
         }
         else{
           this.setState({ color: true, imgn: null, result: 'False Input' });
         }
       }
       
        return (  
            <LinearGradient style={{flex:1, paddingTop:10,alignItems:'center',justifyContent:'center'}} colors={["#0a7b8a","#2cc0d4" ]}>
             
              
             <Bounce style={{position:'absolute'}} size={390} color="#75E6DA" />   
               <TouchableOpacity style={{
                backgroundColor: this.state.color ? "transparent" : "#75E6DA",
                width:350,
                bottom:7,
                height:345,
                paddingVertical:5,
                marginHorizontal:10,
                alignItems:'center',
                borderRadius:200}} onPress={fn}> 

                    
                    
                    <Text style={{color: this.state.color ? "transparent" : "#b88e00",fontWeight:"bold",marginTop:150,position:'absolute',fontSize:25}}>Press to Reveal</Text>  
                    
                <View>
                  <Image style={{width:200,height:300,alignSelf:'center'}} source={this.state.imgn} />
                  <Text style={{alignSelf:'center',fontWeight:'bold',margin:10,fontSize:22,color:'gold',}}>
                  {this.state.result}
                </Text> 
                </View>
                    </TouchableOpacity>

                        <TouchableOpacity style={{
                position:'absolute', 
                backgroundColor: this.state.color ? "#F86EB4" :"transparent",
                width:'95.5%',
                paddingVertical:5,
                marginHorizontal:15,
                alignItems:'center',
                borderRadius:20,
                bottom:40,
                shadowColor: this.state.color ? "#000" :"transparent",
                    shadowOffset: { width: 2, height: 2},
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    elevation: 5}} onPress={this.state.color ? ()=>this.props.navigation.navigate('Qn1'): ()=>null}> 

                   <Text style={{color:this.state.color ? "#fff" :"transparent",paddingVertical:6,fontWeight:"bold",alignContent:"center",fontSize:22}}>Back to start</Text>
                    </TouchableOpacity>
             
            </LinearGradient>  
        );  
    }  
}