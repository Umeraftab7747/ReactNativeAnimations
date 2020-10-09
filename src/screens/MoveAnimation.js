import React from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';

export class MoveAnimation extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    const AnimatedStyle = {
      transform: [
        {
          translateX: this.state.animation,
        },
      ],
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
