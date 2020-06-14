import * as Font from 'expo-font';

const bootstrap = async () => {
  await Font.loadAsync({
		regular: require('../assets/fonts/Montserrat-Regular.ttf'),
		bold: require('../assets/fonts/Montserrat-Bold.ttf'),
		semiBold: require('../assets/fonts/Montserrat-SemiBold.ttf')
  });
}

export default bootstrap;