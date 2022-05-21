import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WatchList from '../screens/watchlist';
import Search from '../screens/search'; 
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Discover from './DiscoverDrawer';

const TabNav = () => {
    const Tab = createBottomTabNavigator() 

    return (
        <Tab.Navigator 
        screenOptions={{headerShown: false,  
         tabBarActiveTintColor: '#fc0345',
        tabBarInactiveTintColor: 'white', 
        tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "none"
        }}}>

        <Tab.Screen name='Discover' component={Discover} 
             options={{
                tabBarIcon: ({size, color}) => (<MaterialIcons name="my-library-books" size={24} color="white" />)
                }}
        />

           
            <Tab.Screen name="WatchList" component={WatchList}  
               options={{
                   tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name="playlist-plus" size={24} color="white" />)
               }}
            />
            <Tab.Screen name="Search" component={Search} 
              options={{
                  tabBarIcon: ({size, color}) => (<Fontisto name="search" size={24} color="white" />)
              }}
            />

        </Tab.Navigator>
    )
}

export default TabNav