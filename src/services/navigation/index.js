import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../../screens/authFlow/splash';
import Signup from '../../screens/authFlow/signup';
import Verify from '../../screens/authFlow/verify';
import Otp from '../../screens/authFlow/otp';
import Signin from '../../screens/authFlow/signin';
import Newsfeed from '../../screens/appFlow/newsfeed';
import Notifications from '../../screens/appFlow/notifications';
import Map from '../../screens/appFlow/map';
import Feedback1 from '../../screens/appFlow/feedback1';
import Feedback2 from '../../screens/appFlow/feedback2';
import Feedback3 from '../../screens/appFlow/feedback3';
import Feedback4 from '../../screens/appFlow/feedback4';
import Kabficard from '../../screens/appFlow/kabficard';
import Forgotpass from '../../screens/authFlow/forgotpass';
import Chekmail from '../../screens/authFlow/chekmail';
import MyProfile from '../../screens/appFlow/myprofile';
import Settings from '../../screens/appFlow/settings';
import Planner from '../../screens/appFlow/planner';
import PlannerInside from '../../screens/appFlow/plannerinside';

const Stack = createStackNavigator();

const MainContainer = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={'OrderPage'} component={OrderScreen} /> */}
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'Otp'} component={Otp} />
        <Stack.Screen name={'Verify'} component={Verify} />
        <Stack.Screen name={'Signin'} component={Signin} />
        <Stack.Screen name={'Newsfeed'} component={Newsfeed} />
        <Stack.Screen name={'Notifications'} component={Notifications} />
        <Stack.Screen name={'Map'} component={Map} />
        <Stack.Screen name={'Feedback1'} component={Feedback1} />
        <Stack.Screen name={'Feedback2'} component={Feedback2} />
        <Stack.Screen name={'Feedback3'} component={Feedback3} />
        <Stack.Screen name={'Feedback4'} component={Feedback4} />
        <Stack.Screen name={'Kabficard'} component={Kabficard} />
        <Stack.Screen name={'Forgotpass'} component={Forgotpass} />
        <Stack.Screen name={'Chekmail'} component={Chekmail} />
        <Stack.Screen name={'MyProfile'} component={MyProfile} />
        <Stack.Screen name={'Settings'} component={Settings} />
        <Stack.Screen name={'Planner'} component={Planner} />
        <Stack.Screen name={'PlannerInside'} component={PlannerInside} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
