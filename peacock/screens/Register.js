import React , {useState} from 'react'; 
import {Text , View , StyleSheet , Button , TextInput , FlatList} from 'react-native'; 


const register = async() => { 
  return {success : true}
}


const Register = ({navigation}) => {
   const [username , setUserName] = useState('') 
   const [email , setEmail] = useState('') 
   const [password , setPassword] = useState('') 
   const [error , setError] = useState('') 
  

   const handleSignUp = async() => {  
        if(!username || !email || !password){ 
            setError('All field are required') 
            return;
        } 

      

        try {
           await register(username , email , password)  
          navigation.navigate('Login')
        } catch (error) {
          console.log(error)
        }   
   }
  return (
    <View style = {styles.container}> 
       <Text style = {styles.title}>Register</Text>   

       {error ? <Text style={styles.errorText}>{error}</Text> : null}
       <TextInput  
        style = {styles.input} 
        placeholder = 'Type your username' 
        value = {username} 
        onChangeText = {setUserName}
       /> 


       <TextInput  
        style = {styles.input} 
        placeholder = 'Type your email' 
        value = {email} 
        onChangeText = {setEmail}
       /> 


      <TextInput  
        style = {styles.input} 
        placeholder = 'Type you password' 
        value = {password} 
        onChangeText = {setPassword}
        secureTextEntry
       />   

      <Button title = 'Register' onPress={handleSignUp} color = 'purple' /> 
    </View>
  )
} 

const styles = StyleSheet.create({ 
    container:{ 
      flex:1, 
      backgroundColor:'#fff', 
      padding:20,
    }, 

    title:{ 
       fontSize:24, 
       color:'purple', 
       fontWeight:'bold', 
       fontStyle:'italic', 
       marginBottom:20, 
       textAlign:'center',
    }, 

    input:{ 
        paddingLeft:10, 
        height:40, 
        marginBottom:20, 
        borderColor:'gray', 
        borderWidth:1, 
        borderRadius:8
    }, 

    errorText: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 20,
    },
})

export default Register