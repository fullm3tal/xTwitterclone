import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} />

      <View style={{width: '100%', paddingVertical: 10}}>
        <FontAwesome6
          name={'x-twitter'}
          style={{alignSelf: 'center'}}
          color={'black'}
          size={22}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: '60%',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <View style={{marginHorizontal: 30}}>
            <Text style={{fontSize: 33.5, fontWeight: '500', color: 'black'}}>
              See what's happening in the world right now
            </Text>
          </View>
        </View>
        <View style={{height: '40%', backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                borderRadius: 25,
                paddingVertical: 7,
                width: '80%',
                borderWidth: 1,
                borderColor: '#c0c0c0',
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
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignSelf: 'center',
                paddingVertical: 8,
              }}>
              <View
                style={{
                  backgroundColor: '#c0c0c0',
                  height: 1,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: '#c0c0c0',
                }}>
                or
              </Text>
              <View
                style={{
                  backgroundColor: '#c0c0c0',
                  height: 1,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
            </View>
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
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: 30,
            }}>
            <View style={{alignSelf: 'center', width: '80%', marginTop: 30}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 13,
                  textAlign: 'left',
                }}>
                By signing up, you agree to our Terms,{' '}
                <Text style={{color: '#20a7db'}}>Privacy Policy,</Text> and{' '}
                <Text style={{color: '#20a7db'}}>Cookie Use.</Text>
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'left',
                marginTop: 30,
                width: '80%',
                fontSize: 14,
                alignSelf: 'center',
              }}>
              Have an account already?{' '}
              <Text style={{color: '#20a7db'}}>Log in</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
