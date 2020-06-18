import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types';

const initialState = {
	allPosts: [],
	bookedPosts: [],
	loading: true
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POSTS:
			return {
				...state,
				allPosts: action.payload,
				bookedPosts: action.payload.filter((p) => p.booked),
				loading: false
			};
		case TOGGLE_BOOKED:
			const allPosts = state.allPosts.map((post) => {
				if (post.id === action.payload) {
					post.booked = !post.booked;
				}
				return post;
			});

			return { ...state, allPosts, bookedPosts: allPosts.filter((p) => p.booked) };
		case REMOVE_POST:
			return {
				...state,
				allPosts: state.allPosts.filter((p) => p.id !== action.payload),
				bookedPosts: state.bookedPosts.filter((p) => p.id !== action.payload)
			};
		case ADD_POST:
			return { ...state, allPosts: [{ ...action.payload }, ...state.allPosts] };
		default:
			return state;
	}
};

export default postReducer;
