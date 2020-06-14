import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {

	return (
		<View style={styles.center}>
			<Text style={styles.sampleText}>Демонстрация работы с React Native</Text>
			<Text style={styles.sampleText}>
				Версия приложения <Text style={styles.version}>1.0.0</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	version: {
		fontFamily: 'bold'
	},
	sampleText: {
		fontFamily: 'regular'
	}
});

export default AboutScreen;
