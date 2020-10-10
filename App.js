import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screen/Home/Home';
import Tours from './screen/Tours/Tours';
import Account from './screen/Account/Account';
import Settings from './screen/Settings/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'boat-outline' : 'boat-outline';
						} else if (route.name === 'Tour') {
							iconName = focused ? 'calendar-outline' : 'calendar-outline';
						} else if (route.name === 'Account') {
							iconName = focused ? 'person-outline' : 'person-outline';
						} else if (route.name === 'Setting') {
							iconName = focused ? 'settings-outline' : 'settings-outline';
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					showLabel: false,
					activeTintColor: 'tomato',
					inactiveTintColor: 'green', 
					style: {
						paddingTop: 10 
					}
				}}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Tour" component={Tours} />
				<Tab.Screen name="Account" component={Account} />
				<Tab.Screen name="Setting" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
