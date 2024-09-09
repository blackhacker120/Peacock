import React , {useEffect} from 'react'; 
import {Text , View , StyleSheet , Button , Image , HandleBar} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets'; 


const Home = () => { 
   const navigation = useNavigation() 


   useEffect(() => { 
     navigation.setOptions({ 
         headers:false
     })
   } , [])
  return (
    <View style = {styles.container}> 
      
      <Image  
       style = {styles.imageContainer} 
       source = {HeroImage}
      />

      <Text style = {styles.title}>Karibu Lugha Tausi Programming Language</Text> 
      <Text style = {styles.txt}> 
         Lugha Tausi ni Lugha ambayo imetengenezwa na CEO wa mambo ya Python yaani Masako 
         ni Computer Science Engineer ambaye ametokea kwenye mawio ya Jua 
         hii Lugha imetengenezwa ili kujifunza kitaaluma kwa njia ya Kiswahili ambapo itamfanya
         mtumiaji atumie kwa ufasaa una ufanisi
        </Text> 
      <Button title = 'Get Started' onPress={HandleBar} color = 'purple' />           
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
       marginTop:20,
       marginBottom:40, 
       textAlign:'center', 
       fontStyle:'italic', 
       color:'purple',  
    },  

    txt:{ 
        fontSize:18,  
        marginTop:40,
        fontStyle:'italic', 
        letterSpacing:1.2, 
        color:'green', 
        marginBottom:30
    },

    imageContainer:{    
        marginBottom:20, 
        marginTop:30, 
        marginLeft:100,  
        width:120, 
        height:100, 
        borderRadius:8, 
    }
})

export default Home