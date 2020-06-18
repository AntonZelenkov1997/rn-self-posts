import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { toggleBooked } from '../store/actions/post';

const BookedScreen = ({ navigation }) => {
	const { navigate } = navigation;

	const favorites = useSelector((state) => state.post.bookedPosts);

	// В функциональных компонентах можно воспользоваться useDispatch для вызова actions
	const dispatch = useDispatch();

	const goToPostScreen = (post) => {
		return navigate('PostScreen', {
			postId: post.id,
			date: post.date,
			booked: post.booked,
			toggleBooked: () => {
				dispatch(toggleBooked(post));
				navigate('PostScreen', {
					booked: !post.booked
				});
			}
		});
	};

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={favorites}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => <Post post={item} onOpen={goToPostScreen} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	}
});

export default BookedScreen;
