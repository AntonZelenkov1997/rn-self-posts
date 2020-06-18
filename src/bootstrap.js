import * as Font from 'expo-font';
import DB from './db';

const bootstrap = async () => {
	try {
		await Font.loadAsync({
			regular: require('../assets/fonts/Montserrat-Regular.ttf'),
			bold: require('../assets/fonts/Montserrat-Bold.ttf'),
			semiBold: require('../assets/fonts/Montserrat-SemiBold.ttf')
		});
		await DB.init();
		console.log('Database started...');
	} catch (error) {
		console.log('Error', error);
	}
};

export default bootstrap;
