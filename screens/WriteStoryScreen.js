import React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends React.Component {
  render(){
    return ( 
        <View style ={{flex:1}}>
            <TextInput style = {styles.inputBox}
                      placeholder = "Story Title"
            />

            <TextInput style = {styles.inputBox}
                      placeholder = "Author"
            />

            <TextInput style = {styles.storyBox}

                      multiline = {true}
                      placeholder = "Story Title"
                      
            />

            <TouchableOpacity style = {styles.button}>
             <Text style = {styles.buttonText}> Submit </Text>
            </TouchableOpacity>
        </View> 
    );
  }
}



const styles = StyleSheet.create({
  inputBox:{
        fontSize:15,
        borderColor:'#1E1E24',
        borderWidth:1.4,
        width:270,
        height:40,
        textAlign:'center',
        alignSelf:'center',
        marginTop:40
     
    },

    storyBox:{

        fontSize:15,
        borderColor:'#1E1E24',
        borderWidth:1.4,
        width:270,
        height:200,
        textAlign:'center',
        alignSelf:'center',
        marginTop:40

    },

    button:{
      backgroundColor:'#444140',
      alignSelf:'center',
      marginTop:50,
      width:100,
      height:35,
      border:'black',
      borderRadius:10

    },

    buttonText:{
      color:'#F7EBE8',
      alignSelf: 'center',
      fontFamily: 'Times New Roman',
      padding:9,
      fontStyle:'bold',
      fontSize:18
      
    }

   
})