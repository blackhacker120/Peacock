import "react-native-gesture-handler"; 
import React from "react"; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Home from "./screens/Home"; 
import Register from "./screens/Register"; 
import Login from "./screens/Login"; 

const Stack = createNativeStackNavigator();

export default function App(){ 
    return( 
       <NavigationContainer> 
         <Stack.Navigator> 
           <Stack.Screen name = "Register" component={Register} />  
           <Stack.Screen name = "Login" component={Login} />  
           <Stack.Screen name = "Home" component={Home} /> 

         </Stack.Navigator>
       </NavigationContainer> 
    )
}
