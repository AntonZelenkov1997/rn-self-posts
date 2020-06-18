import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

const Post = ({ post, onOpen }) => {

  return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
			<View style={styles.post}>
				<ImageBackground style={styles.img} source={{ uri: post.img }}>
					<View style={styles.wrapper}>
						<Text style={styles.title}>{new Date(post.date).toDateString()}</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	post: {
		marginBottom: 15,
		overflow: 'hidden'
	},
	img: {
		width: '100%',
		height: 200
	},
	wrapper: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingVertical: 5,
		width: '100%',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontFamily: 'regular'
	}
});

export default Post;
