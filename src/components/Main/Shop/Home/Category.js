import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.1.56/api/images/type/';

export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types: this.props.types
    }
  }
  goToListProduct() {
    const { navigate } = this.props.navigation;
    navigate('LIST_PRODUCT');
  }
  render() {
    const { wrapper, imageStyle, cateTitle, textStyle } = styles;
    const { navigate } = this.props.navigation;
    const { types } = this.props;
    return (
      <View style={ wrapper }>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={ textStyle }>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Swiper>
            { types.map(e => (
              <TouchableOpacity onPress={this.goToListProduct.bind(this)} key={e.id}>
                <Image source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                  <Text style={cateTitle}>{e.name}</Text>
                </Image>
              </TouchableOpacity>
            )) }
          </Swiper>
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = ( imageWidth / 933 ) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF'
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9A9A9A'
  }
});