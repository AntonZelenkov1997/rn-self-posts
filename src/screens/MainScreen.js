import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DATA from '../data';
import Post from '../components/Post';

const MainScreen = ({ navigation, route }) => {
  const { navigate } = navigation;

  const goToPostScreen = (post) => {
  
    return navigate('PostScreen', {
		postId: post.id,
		date: post.date,
		booked: post.booked
	});
	};

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={DATA}
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

export default MainScreen;
