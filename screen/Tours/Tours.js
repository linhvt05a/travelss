import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Header from '../../component/Header/Header';

function Tours({ route, navigation }) {
	const [ isLoading, setLoading ] = useState(false);
	if (route.name == 'Tours') {
		setTimeout(function() {
			setLoading(true);
		}, 5000);
	}
	if (route.params === undefined) {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route} />
				{!isLoading && <ActivityIndicator size="small" color="red" />}
				{isLoading && (
					<View>
						<Text>1</Text>
					</View>
				)}
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} route={route} />
				<Text>{route.params.proviceID}</Text>
				{!isLoading && <ActivityIndicator size="small" color="green" />}
				{isLoading && (
					<View>
						<Text>2</Text>
					</View>
				)}
			</View>
		);
	}
}
export default Tours;
