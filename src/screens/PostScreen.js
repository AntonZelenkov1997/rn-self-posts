import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { YellowBox } from 'react-native';
import THEME from '../theme';
import { removePost } from '../store/actions/post';

const PostScreen = ({ navigation, route }) => {
	const { navigate } = navigation;
	const { postId } = route.params;

	const dispatch = useDispatch();
	const post = useSelector((state) => state.post.allPosts).find((p) => p.id === postId);

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
					onPress: () => {
						navigate('MainScreen');
						dispatch(removePost(postId));
					}
				}
			],
			{ cancelable: true }
		);
	};

	if (!post) {
		return null;
	}

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
		padding: 10
	},
	title: {
		fontFamily: 'regular'
	}
});


YellowBox.ignoreWarnings(['Non-serializable values were found in the navigation state']);

export default PostScreen;
