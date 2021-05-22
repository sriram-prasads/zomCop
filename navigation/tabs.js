import React from 'react';
import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Order from '../screens/Order';
import goout from '../screens/goout';
import pro from '../screens/pro';
import Nutrition from '../screens/Nutrition';
import Donate from '../screens/Donate';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90, 
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name = "Order" component={Order} options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center',justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/order.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                //tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Order</Text>
                    </View>
                )
            }} />
            <Tab.Screen name = "Go Out" component={goout} options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center',justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/goout.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                               // tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Go Out</Text>
                    </View>
                )
            }} />
            <Tab.Screen name = "Pro" component={pro} options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center',justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/pro.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                //tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Pro</Text>
                    </View>
                )
            }} />
            <Tab.Screen name = "Nutrition" component={Nutrition} options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center',justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/nutrition.jpg')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                //tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Nutrition</Text>
                    </View>
                )
            }} />
            <Tab.Screen name = "Donate" component={Donate} options={{
                tabBarIcon: ({focused}) => (
                    <View style ={{alignItems: 'center',justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/icons/donate.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                //tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Donate</Text>
                    </View>
                )
            }} />

        </Tab.Navigator>
    );

}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    
    }
});



export default Tabs;