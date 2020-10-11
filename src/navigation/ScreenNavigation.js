import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {MoveAnimation} from '../screens';
import {OpactiyAnimation} from '../screens';
import {ScaleAnimation} from '../screens';
import {ColorAnimation} from '../screens';
import {ParallerAnimation} from '../screens';
import {RotateAnimation} from '../screens';
import {DelayAnimation} from '../screens';
import {TinderScreen} from '../screens';
import {PanAnimation} from '../screens';

export class ScreenNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TinderScreen"
            component={TinderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PanAnimation"
            component={PanAnimation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="DelayAnimation"
            component={DelayAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ParallerAnimation"
            component={ParallerAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RotateAnimation"
            component={RotateAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ColorAnimation"
            component={ColorAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScaleAnimation"
            component={ScaleAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MoveAnimation"
            component={MoveAnimation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OpactiyAnimation"
            component={OpactiyAnimation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
