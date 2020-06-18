import React from 'react';
import { FlatList, View } from 'react-native';
import Post from './Post';

const PostList = ({ allPosts, goToPostScreen }) => (
	<FlatList
		data={allPosts}
		keyExtractor={(post) => post.id.toString()}
		renderItem={({ item }) => <Post post={item} onOpen={goToPostScreen} />}
	/>
);

export default PostList;