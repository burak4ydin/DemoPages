import React from 'react'
import { StyleSheet, View } from "react-native";
import {
  Container, Content,
} from "native-base";
import {
  NavigationBar,
  ImageBackground,
  ListView,
  Caption,
  Heading,
  Switch,
  GridRow, Subtitle, Divider,
} from "@shoutem/ui";
import { TouchableOpacity } from "react-native-gesture-handler";
import GoBackHeader from "../../components/goBackHeader";




const Second = ({navigation,route}) => {

  return (
    <Container style={{flex:1,backgroundColor:'#222628'}}>
      <GoBackHeader navigation={navigation}/>

      <Content >
        <View style={{borderTopEndRadius:15,borderTopLeftRadius:15,backgroundColor:'#1E2225',marginHorizontal:20}}>
          <View>
            <View style={{alignItems:'center',marginVertical:20}}>
              <Subtitle style={{fontSize:22,color:'white',fontWeight:'bold',marginVertical:5}}>Arkadaşını davet et, 200 </Subtitle>
              <Subtitle style={{fontSize:22,color:'white',fontWeight:'bold',marginBottom:5}}>Jeton Kazan. </Subtitle>
              <Subtitle style={{fontSize:20,color:'white',marginTop:5}}>Davet Kodun: 976NS94 </Subtitle>
            </View>
            <Divider styleName="line" style={{color:'orange',marginTop:-9,borderColor:'orange',borderWidth:1,marginHorizontal:100}} />
            <View>
              <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#30343A',borderRadius:6,padding:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Subtitle style={{fontSize:18,color:'white',fontWeight:'600',marginVertical:5}}>Vitrinde Öne Çıkart </Subtitle>
                  <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,}}>29,99 ₺ </Subtitle>
                </View>
                <Subtitle style={{fontSize:15,color:'white',fontWeight:'300',marginVertical:5}}>Seçtiğiniz bir ilanınızı vitrinde öne çıkartın. </Subtitle>

              </View>
              <View style={{marginHorizontal:20,marginVertical:5,backgroundColor:'#30343A',borderRadius:6,padding:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Subtitle style={{fontSize:18,color:'white',fontWeight:'600',marginVertical:5}}>Vitrinde Öne Çıkart </Subtitle>
                  <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,}}>29,99 ₺ </Subtitle>
                </View>
                <Subtitle style={{fontSize:15,color:'white',fontWeight:'300',marginVertical:5}}>Seçtiğiniz bir ilanınızı vitrinde öne çıkartın. </Subtitle>

              </View>
            </View>

          </View>
          <Divider styleName="line" style={{color:'orange',marginTop:9,marginBottom:-8,borderColor:'gray',borderWidth:1}} />
          <View>
            <View style={{marginHorizontal:20,marginTop:20,backgroundColor:'#30343A',borderRadius:6,padding:20}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Subtitle style={{fontSize:18,color:'white',fontWeight:'600',marginVertical:5}}>Aylık Abonelik </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,}}>29,99 ₺ </Subtitle>
              </View>
              <Subtitle style={{fontSize:15,color:'white',fontWeight:'300',marginVertical:5}}>Seçtiğiniz bir ilanınızı vitrinde öne çıkartın. </Subtitle>
            </View>
            <Divider styleName="line" style={{borderColor:'gray',borderWidth:1,marginHorizontal:20}} />
            <View style={{marginHorizontal:20,backgroundColor:'#30343A',borderRadius:6,padding:20}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Subtitle style={{fontSize:18,color:'white',fontWeight:'600',marginVertical:5}}>Vitrinde Öne Çıkart </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,}}>29,99 ₺ </Subtitle>
              </View>
              <Subtitle style={{fontSize:15,color:'white',fontWeight:'300',marginVertical:5}}>Seçtiğiniz bir ilanınızı vitrinde öne çıkartın. </Subtitle>
            </View>
          </View>
          <Divider styleName="line" style={{color:'orange',marginVertical:15,borderColor:'gray',borderWidth:1}} />

          <View style={{marginHorizontal:20,borderRadius:6,marginBottom:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{backgroundColor:'#30343A',padding:20,borderRadius:9,width:'48%'}}>
                <Subtitle style={{fontSize:21,color:'white',fontWeight:'bold',marginVertical:5}}>100 Jeton </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,textAlign:'center'}}>29,99 ₺ </Subtitle>

              </View>
              <View style={{backgroundColor:'#30343A',padding:20,borderRadius:9,width:'48%'}}>
                <Subtitle style={{fontSize:21,color:'white',fontWeight:'bold',marginVertical:5}}>100 Jeton </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,textAlign:'center'}}>29,99 ₺ </Subtitle>

              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:9}}>
              <View style={{backgroundColor:'#30343A',padding:20,borderRadius:9,width:'48%'}}>
                <Subtitle style={{fontSize:21,color:'white',fontWeight:'bold',marginVertical:5}}>100 Jeton </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,textAlign:'center'}}>29,99 ₺ </Subtitle>

              </View>
              <View style={{backgroundColor:'#30343A',padding:20,borderRadius:9,width:'48%'}}>
                <Subtitle style={{fontSize:21,color:'white',fontWeight:'bold',marginVertical:5}}>100 Jeton </Subtitle>
                <Subtitle style={{fontSize:18,color:'#FF8F16',fontWeight:'600',marginBottom:5,textAlign:'center'}}>29,99 ₺ </Subtitle>

              </View>
            </View>
          </View>
        </View>
      </Content>

    </Container>
  )



}

export default Second

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'orange'
  },
  header:{
    borderBottomWidth:0,
    backgroundColor:'white'
  }
})
