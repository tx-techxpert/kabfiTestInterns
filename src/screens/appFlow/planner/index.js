import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {width, height, totalSize} from 'react-native-dimension';
import {Cards, Headers} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {fontFamily, fontSize} from '../../../services';

const DATAVerti = [
  {
    id: '1',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
  {
    id: '2',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
  {
    id: '3',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
];

const DATAHori = [
  {
    id: '1',
    title: 'RICKY GERVAIS',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '2',
    title: 'RICKY GERVAIS',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '3',
    title: 'RICKY GERVAIS',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '4',
    title: 'RICKY GERVAIS',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
];
const HoriItem = ({
  title,
  time,
  date,
  profImage,

  pressor,

  onPress,
}) => (
  <Cards.HoriScroCard
    title={title}
    time={time}
    date={date}
    profImage={profImage}
    pressor={pressor}
    onPress={onPress}
  />
);

const VertiItem = ({
  title,
  time,
  date,
  profImage,

  pressor,

  onPress,
}) => (
  <Cards.VertiScroCard
    title={title}
    time={time}
    date={date}
    profImage={profImage}
    pressor={pressor}
  />
);
const Planner = () => {
  const navigation = useNavigation();
  const renderHoriItem = ({item}) => (
    <HoriItem
      title={item.title}
      time={item.time}
      date={item.date}
      profImage={item.profImage}
      pressor={() => {
        console.log('Ok pressed');
      }}
      onPress={() => navigation.navigate('PlannerInside')}
    />
  );

  const renderVertiItem = ({item}) => (
    <VertiItem
      title={item.title}
      time={item.time}
      date={item.date}
      profImage={item.profImage}
      pressor={() => {
        console.log('Ok pressed');
      }}
      onPress={() => {}}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Headers.TwoHead title={'Planner'} />
      <Text
        style={{
          margin: 10,
          fontFamily: fontFamily.appTextBold,
          fontSize: fontSize.h5,
          color: '#464646',
        }}>
        Upcoming Events in London
      </Text>
      <Text
        style={{
          marginLeft: 10,
          marginBottom: 10,
          fontFamily: fontFamily.appTextRegular,
          color: '#464646',
        }}>
        There's so much happening in London all this month round{' '}
      </Text>

      <View style={{height: height(35)}}>
        <FlatList
          data={DATAHori}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderHoriItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Text
        style={{
          fontFamily: fontFamily.appTextBold,
          margin: 10,
          color: '#464646',
          fontSize: fontSize.h5,
        }}>
        Discover
      </Text>

      <FlatList
        data={DATAVerti}
        pagingEnabled
        renderItem={renderVertiItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Planner;
