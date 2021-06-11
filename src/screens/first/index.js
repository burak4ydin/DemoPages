import React from 'react'
import { StyleSheet, View } from "react-native";
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
  GridRow, Subtitle,
} from "@shoutem/ui";
import { TouchableOpacity } from "react-native-gesture-handler";
import GoBackHeader from "../../components/goBackHeader";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";




const First = ({navigation,route}) => {

  return (
    <Container style={{flex:1}}>
    <GoBackHeader title={'Konum'} navigation={navigation}/>
    <View>
      <View>
        <View>
          <Subtitle>Arkadaşını davet eti</Subtitle>
        </View>

        <View></View>
        <View></View>
      </View>
      <View>
        <View></View>
        <View></View>
      </View>
      <View>
        <View>
          <View></View>
          <View></View>
        </View>
        <View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>

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
