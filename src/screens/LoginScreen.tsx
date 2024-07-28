import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#efefef'}}>
      <View style={{width: '100%', paddingVertical: 10}}>
        <FontAwesome6
          name={'x-twitter'}
          style={{alignSelf: 'center'}}
          color={'black'}
          size={22}
        />
      </View>
      <View style={{flex: 1, backgroundColor: '#efefef'}}>
        <View
          style={{
            height: '60%',
            backgroundColor: '#efefef',
            justifyContent: 'center',
          }}>
          <View style={{marginHorizontal: 30}}>
            <Text style={{fontSize: 34, fontWeight: '600', color: 'black'}}>
              See what's happening in the world right now
            </Text>
          </View>
        </View>
        <View style={{height: '40%', backgroundColor: '#efefef'}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              paddingVertical: 10,
              width: '80%',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../assets/google.jpg')}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '500',
                marginLeft: 8,
                color: 'black',
              }}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', fontSize: 12}}>or</Text>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              paddingVertical: 10,
              width: '80%',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'black',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '500',
                marginLeft: 8,
                color: 'white',
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <View style={{alignSelf: 'center', width: '80%', marginTop: 30}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 12,
                textAlign: 'left',
              }}>
              By signing up, you agree to our Terms, Privacy Policy, and Cookie
              Use.
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 30,
              width: '80%',
              alignSelf: 'center',
            }}>
            Have an accont already? Log in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
