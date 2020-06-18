import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, toggleBooked } from '../store/actions/post';
import PostList from '../components/PostList';
import PostListEmpty from '../components/PostListEmpty';
import THEME from '../theme';

const MainScreen = ({ navigation }) => {
	const { navigate } = navigation;

	// В функциональных компонентах можно воспользоваться useDispatch для вызова actions
	const dispatch = useDispatch();

	// В функциональных компонентах можно воспользоваться useSelector для получения состояния в Redux
	const allPosts = useSelector((state) => state.post.allPosts);
	const loading = useSelector((state) => state.post.loading);

	let goToPostScreen = (post) => {
		navigate('PostScreen', {
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

	useEffect(() => {
		dispatch(loadPosts());
	}, [dispatch]);

	const postListContent =
		allPosts.length !== 0 ? <PostList allPosts={allPosts} goToPostScreen={goToPostScreen} /> : <PostListEmpty />;

	if (loading) {
		return (
			<View style={styles.center}>
				<ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
			</View>
		);
	}

	return <View style={styles.wrapper}>{postListContent}</View>;
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MainScreen;
