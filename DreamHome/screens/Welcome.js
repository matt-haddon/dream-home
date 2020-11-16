import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackgroundCarousel from '../components/BackgroundCarousel';

const images = [
  'https://images.unsplash.com/photo-1520386950581-900a51cbbc93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
  'https://images.unsplash.com/photo-1535053410863-f8986f4fedb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kristian-strand-2DAjiGr-IGQ-unsplash.jpg',
  'https://images.unsplash.com/photo-1557838429-692ef4ee8081?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=arnaud-schildknecht-UsKT4fDsS3g-unsplash.jpghttps://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=bruno-martins-GkZvxVsHYWw-unsplash.jpges.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jason-briscoe-UV81E0oXXWQ-unsplash.jpg',
  'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2098405.jpg&fm=jpg',
  'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?cs=srgb&dl=pexels-mark-mccam',
  'https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=simone-hutsch-l8fyK9RS-OU-unsplash.jpg',
  'https://images.pexels.com/photos/4450329/pexels-photo-4450329.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-4450329.jpg&fm=jpg',
  'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?cs=srgb&dl=pexels-jovydas-pinkevicius-2462015.jpg&fm=jpg',
];

const Welcome = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Form');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Button style={styles.button} light onPress={pressHandler}>
        <Text style={{ fontFamily: 'Quicksand_Bold', fontSize: 20 }}>
          Find Your DreamHome
        </Text>
      </Button>

      <BackgroundCarousel images={images} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F9C700',
    position: 'absolute',
    width: '60%',
    marginLeft: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    zIndex: 1,
    paddingHorizontal: 5,
  },
});

export default Welcome;
