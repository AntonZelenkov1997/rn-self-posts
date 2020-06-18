import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import THEME from '../theme';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({ navigation }) => {
	const { navigate } = navigation;
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const imgRef = useRef();

	const photoPickHandler = (uri) => {
		imgRef.current = uri;
	}

	const saveHandler = () => {
		const post = {
			id: new Date(),
			date: new Date().toJSON(),
			text,
			img: imgRef.current,
			booked: false
		};

		dispatch(addPost(post));
		navigate('MainScreen');
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback>
				<View style={styles.wrapper}>
					<Text style={styles.title}>Создай новый пост</Text>
					<TextInput
						style={styles.textArea}
						placeholder="Введите текст поста"
						value={text}
						onChangeText={setText}
						multiline
					/>
					<PhotoPicker onPick={photoPickHandler} />
					<Button disabled={!text || !imgRef.current} title="Создать пост" color={THEME.MAIN_COLOR} onPress={saveHandler} />
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	},
	title: {
		fontFamily: 'regular',
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 10
	},
	textArea: {
		padding: 10,
		marginBottom: 10
	},
	img: {
		width: '100%',
		height: 200,
		marginBottom: 20
	},
});

export default CreateScreen;
