import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screen/Home/Home';
import Login from './screen/Login/Login';
import Account from './screen/Account/Account';
import Settings from './screen/Settings/Settings';
import Notification from './screen/Notification/Notification'
import Tours from './screen/Tours/Tours'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={TabStack} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Logout" component={Login} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

function TabStack() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
        )
    }}/>
      		<Tab.Screen name="Tours" component={Tours} />
			<Tab.Screen name="Account" component={Account} />
		</Tab.Navigator>
	);
}


export default App;
