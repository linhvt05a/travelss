import React,{useState,useEffect} from 'react'
import {StyleSheet,View} from 'react-native'
import Header from '../../component/Header/Header'
import {LoadingView} from '../../component/ActivityIndicator/index'

const Home = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 6000);
    }, []);

    return (
       <View style={styles.container}>
         <Header navigation={navigation} route={route}/>
         <LoadingView label="Loading..." color="red" size="small" />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
     padding: 5,
     paddingLeft: 10
  },
   image:{
     width: 190,
     height: 150,
    borderRadius: 20
   },
   header: {
     backgroundColor: 'red',
     height: 60,
     width : 414,
     paddingTop: 10
   },
   header_text : {
     color: 'white',
     fontSize :18,
     paddingTop: 20
   },
   txtLoading:{
     marginLeft: 180,
     marginTop: 20
   },
   home_place_title:{
     color: 'white',
     fontSize:16,
     fontWeight: 'bold',
     paddingTop: 130,
     paddingLeft: 10
   }
  });
export default Home
