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

const GoBackHeader = ({title,navigation}) => {
  if(title){
    return (
      <Header style={styles.header}>
        <InputGroup style={styles.headerInputGroup}>

          <Button transparent style={styles.backIconButton} onPress={()=>navigation.goBack()}>
            <Icon name='arrow-back-outline' style={styles.backIcon} />
          </Button>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}> {title}</Text>

          </View>
        </InputGroup>
      </Header>
    )
  }else{
    return (
      <Header style={styles.header2}>
        <InputGroup style={styles.headerInputGroup2}>
          <View style={{backgroundColor:'#44484F',borderRadius:9}}>
          <View transparent style={styles.backIconButton2} onPress={()=>navigation.goBack()}>
            <Icon name='chevron-back-outline' style={styles.backIcon} />
          </View>
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
    backgroundColor: '#222629',
    marginVertical:10
  },
  headerInputGroup: {
    flex: 1,
    position: 'relative',
    borderBottomWidth: 0,
    justifyContent: 'space-between',
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
    fontSize: 30,
  },
  headerTitleContainer: {
    width: wp('100%'),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'

  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '400',
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
