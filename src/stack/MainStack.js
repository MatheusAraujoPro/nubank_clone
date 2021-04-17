import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main/index';
import Splash from '../pages/Splash/index';


const stack = createStackNavigator();

{/* Dentro desse componente ficaram as todas as telas dessa stack */};
export default () =>(    
    <stack.Navigator
        initialRouteName="Splash"
        screenOptions={{         
            headerShown:false,
        }}
    >
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="Main" component={Main}/>   
    </stack.Navigator>
);