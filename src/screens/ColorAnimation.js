import React from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';

export class ColorAnimation extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    const ColorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(255, 99, 71, 1)', 'rgba(255, 99, 200, 1)'],
    });

    const AnimatedStyle = {
      backgroundColor: ColorInterpolate,
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, AnimatedStyle]} />
        <TouchableOpacity style={styles.button} onPress={this.startAnimation}>
          <Text style={styles.btntxt}>Animation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'tomato',
    width: 150,
    height: 150,
    borderRadius: 1000,
  },
  button: {
    backgroundColor: 'gold',
    width: '30%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    borderRadius: 10,
  },
  btntxt: {
    color: 'white',
  },
});
