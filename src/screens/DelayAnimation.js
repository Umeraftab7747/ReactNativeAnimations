import React from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';

export class DelayAnimation extends React.Component {
  state = {
    scale: new Animated.Value(1),
    color: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 2,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(this.state.color, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(this.state.color, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  render() {
    const ColorInterpolate = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(255, 99, 71, 1)', 'rgba(255, 99, 200, 1)'],
    });

    const AnimatedStyle = {
      backgroundColor: ColorInterpolate,
      transform: [
        {
          scale: this.state.scale,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, AnimatedStyle]} />
        <TouchableOpacity style={styles.button} onPress={this.startAnimation}>
          <Text style={styles.btntxt}>Animate</Text>
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
    marginTop: '30%',
    borderRadius: 10,
  },
  btntxt: {
    color: 'white',
  },
});
