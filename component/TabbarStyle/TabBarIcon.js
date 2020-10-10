import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';



const TabStyle = ({route}) =>{
  var iconName;
  if (route.name === 'Home') {
    iconName = "home-outline"
  } 
  return <Ionicons name={iconName} size={10} color="red"/>;
}

const TabBarIcon = ({route}) => {
   return <TabStyle route={route}/>
}


export default TabBarIcon
