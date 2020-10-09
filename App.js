import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screen/Home/Home';
import Login from './screen/Login/Login';
import Account from './screen/Account/Account';
import Settings from './screen/Settings/Settings';
import Notification from './screen/Notification/Notification';
import Tours from './screen/Tours/Tours';
import TourSchedule from './screen/Tours/TourSchedule';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={RootTab} />
				<Drawer.Screen name="Notification" component={Notification} />
				<Drawer.Screen name="Settings" component={Settings} />
				<Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Logout" component={Login} />
				
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

function RootTab({route, navigation}) {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Tours" component={Tours} />
			<Tab.Screen name="Schedule" component={TourSchedule}/>
		</Tab.Navigator>
	);
}



export default App;
