import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostListEmpty = () => (
	<View style={styles.wrapper}>
		<Text style={styles.text}>Данных нет :'(</Text>
	</View>
);

const styles = StyleSheet.create({
	wrapper: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
  text: {
    fontFamily: 'semiBold',
    fontSize: 24,
  }
});

export default PostListEmpty;
