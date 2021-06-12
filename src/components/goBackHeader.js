import React, {Component, useState} from 'react'
import {SafeAreaView, Platform, StyleSheet, View, Image, ScrollView, KeyboardAvoidingView} from 'react-native'
import {
  Container,
  Content,
  Body,
  Button,
  Text,
  Header,
  Input,
  Footer,
  FooterTab,
  InputGroup,
  Icon,
  Thumbnail,
  ListItem,
  List,
  Toast,
} from 'native-base'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Caption, Subtitle } from "@shoutem/ui";

const GoBackHeader = ({title,navigation}) => {
  if(title){
    return (
      <Header style={styles.header}>
        <InputGroup style={styles.headerInputGroup}>

          <View style={{backgroundColor:'#E7DECC',borderRadius:9}}>
            <TouchableOpacity transparent style={styles.backIconButton2} onPress={()=>navigation.goBack()}>
              <Icon name='chevron-back-outline' style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer}>
            <Subtitle style={styles.headerTitle}> {title}</Subtitle>

          </View>

            <TouchableOpacity transparent style={styles.backIconButton2} onPress={()=>navigation.navigate('Second')}>
              <Caption style={{color:'#FF8F16',fontSize:15}}> Bitti</Caption>
            </TouchableOpacity>
        </InputGroup>
      </Header>
    )
  }else{
    return (
      <Header style={styles.header2}>
        <InputGroup style={styles.headerInputGroup2}>
          <View style={{backgroundColor:'#44484F',borderRadius:9}}>
          <TouchableOpacity transparent style={styles.backIconButton2} onPress={()=>navigation.goBack()}>
            <Icon name='chevron-back-outline' style={styles.backIcon} />
          </TouchableOpacity>
          </View>
          <View style={styles.headerTitleContainer2}>
            <Text style={styles.headerTitle2}> 322</Text>
            <View style={{justifyContent:'center',marginLeft:2}}>

            <Icon type={'Ionicons'} name={'cash'} style={{fontSize:22,color:'#FF8F16'}}/>
            </View>
          </View>
        </InputGroup>
      </Header>
    )
  }

}

export default GoBackHeader;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
  },
  header2: {
    borderBottomWidth: 0,
    backgroundColor: '#4E5258',
    marginVertical:10
  },
  headerInputGroup: {
    flex: 1,
    borderBottomWidth: 0,
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  headerInputGroup2: {
    flex:1,
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    marginHorizontal:9
  },
  backIconButton: {
    zIndex: 2,
    marginTop: 10,

  },
  backIconButton2: {
    zIndex: 2,
    justifyContent:'center',
    alignItems:'center',

  },
  backIcon: {
    color: 'white',
    fontSize: 25,
  },
  headerTitleContainer: {

    justifyContent: 'center',
    alignItems: 'center'

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '300',
  },
  headerTitleContainer2: {
    flexDirection:'row',
    backgroundColor: '#30343A',
    borderRadius:10,
    padding:5
  },
  headerTitle2: {
    fontSize: 22,
    color:'white',

    fontWeight: '400',
  },
})
