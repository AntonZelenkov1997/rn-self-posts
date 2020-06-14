import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import THEME from '../theme';
import DATA from '../data';

const PostScreen = ({ navigation, route }) => {
	const { navigate } = navigation;
	const { postId } = route.params;

	const post = DATA.find((p) => p.id === postId);

	const removeHandler = () => {
		Alert.alert(
			'Удаление поста',
			'Вы точно хотите удалить пост?',
			[
				{
					text: 'Отменить',
					style: 'cancel'
				},
				{
					text: 'Удалить',
					style: 'destructive',
					onPress: () => console.log('OK Pressed')
				}
			],
			{ cancelable: true }
		);
	}

	const goToMainScreen = () => {
		return navigate('MainScreen');
	};

	return (
		<ScrollView>
			<Image source={{ uri: post.img }} style={styles.img} />
			<View style={styles.textWrp}>
				<Text>{post.text}</Text>
			</View>
			<Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 200
	},
	textWrp: {
		padding: 10,
	},
	title: {
		fontFamily: 'regular'
	}
});

export default PostScreen;
