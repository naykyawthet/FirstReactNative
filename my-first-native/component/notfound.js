import { StyleSheet, Image, View,Text } from 'react-native'
import React from 'react'



const notfound = () => {
  return (
    <View>
       <Text style={{color:'red',fontSize :20,fontWeight:'bold', marginTop:199}}>Data Not Found</Text>
    </View>
  )
}

export default notfound

const styles = StyleSheet.create({})