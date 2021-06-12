import React from 'react'
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Container, Icon, Input, InputGroup, Text,
} from "native-base";
import {
  NavigationBar,
  ImageBackground,
  ListView,
  Caption,
  Heading,
  Switch,
  GridRow, Subtitle, TextInput,
} from "@shoutem/ui";
import { TouchableOpacity } from "react-native-gesture-handler";
import GoBackHeader from "../../components/goBackHeader";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";




const First = ({navigation,route}) => {

  return (
    <Container style={{flex:1,position:'relative',}}>
    <GoBackHeader title={'Konum'} navigation={navigation}/>
    <View>
      <View style={{flexDirection:'row',backgroundColor:'white',marginHorizontal:20,alignItems:'center',justifyContent:'space-between',borderRadius:9,marginVertical:20}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>

        <Icon name='search' style={{marginLeft:20,marginRight:-20}} />

        <TextInput
        // style={{marginHorizontal:20}}
        placeholder={'Konumlarda ara'}
        onChangeText={(text)=>{console.log(text)}}
      />
        </View>
        <Icon name='locate' style={{marginRight:20,color:'#FF8F16'}}/>

      </View>
    </View>
      <Image
        style={{flex:1, position:'absolute',zIndex:-2,resizeMode:'cover',height:'100%'}}

        source={require('../../images/map.png')}
      />
    </Container>
  )



}

export default First

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'orange'
  },
  header:{
    borderBottomWidth:0,
    backgroundColor:'white'
  }
})
