/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet, View, Text, Animated, PanResponder} from 'react-native';

export class TinderScreen extends React.Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: (_, gesture) => {
      this.pan.x.setValue(gesture.dx), this.pan.y.setValue(gesture.dy);
    },
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });

  render() {
    const RotateInterpolate = this.pan.x.interpolate({
      inputRange: [-350 / 2, 0, 350 / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
    });

    const styleAnimtated = {
      transform: [{rotate: RotateInterpolate}],
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styleAnimtated, this.pan.getTranslateTransform()]}
          {...this.panResponder.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 550,
    width: 350,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
});
