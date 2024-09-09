import React , {useState} from 'react'; 
import {Text , View , StyleSheet , Button , TextInput} from 'react-native'; 

const login = async() => { 
    return {success : true}
}

const Login = ({navigation}) => { 
   const [email , setEmail] = useState('') 
   const [password , setPassword] = useState('') 
   const [error ,  setError] = useState('') 

   const handleLogin = async() => {  
      if(!email || !password){ 
      setError('All fields are required')  
      return;
     } 

        try {
          const response = await login(email , password) 
          console.log(response) 
          navigation.navigate('Home')
        } catch (error) {
          console.log(error)
        }   
   }
  return (
    <View style = {styles.container}> 
       <Text style = {styles.title}>Login</Text> 
         
       {error ? <Text style={styles.errorText}>{error}</Text> : null}  
       
       <TextInput  
        style = {styles.input} 
        placeholder = 'Type your email' 
        value = {email} 
        onChangeText = {setEmail}
       /> 


      <TextInput  
        style = {styles.input} 
        placeholder = 'Type your password' 
        value = {password} 
        onChangeText = {setPassword}
        secureTextEntry
       />   

      <Button title = 'Login' onPress={handleLogin} color = 'purple' /> 
     
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
       marginBottom:20, 
       textAlign:'center',
       color:'purple',
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

export default Login