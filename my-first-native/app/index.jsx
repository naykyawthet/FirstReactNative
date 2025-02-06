import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Todoscreen from '../component/Todoscreen'
import React from 'react'
import Notfound from '../component/notfound'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View >
            <Todoscreen />
            {/* <Notfound/> */}
        </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     borderBlockColor:'black'
    // },
   
})