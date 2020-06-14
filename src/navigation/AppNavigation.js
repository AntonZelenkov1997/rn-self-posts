import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import THEME from '../theme';
import AppHeaderIcon from '../components/AppHeaderIcon';
import BookedScreen from '../screens/BookedScreen';
import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';

// Create and configure Navigator for MainStack

const MainStack = createStackNavigator();

const navigatorScreenOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
};

const mainScreenOptions = ({ navigation }) => ({
  title: 'My home',
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-camera" onPress={() => console.log('press photo')} />
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
		</HeaderButtons>
	)
});

const postScreenOptions = ({ route }) => ({
	title: `Пост от ${new Date(route.params.date).toDateString()}`,
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName={route.params.booked ? "ios-star" : "ios-star-outline"}  onPress={() => console.log('press photo')} />
		</HeaderButtons>
	)
});

// create MainStackNavigator and FavoritesStackNavigator

const MainStackComponent = () => (
  <MainStack.Navigator screenOptions={navigatorScreenOptions} initialRouteName="MainScreen">
    <MainStack.Screen options={mainScreenOptions} name="MainScreen" component={MainScreen} />
    <MainStack.Screen options={postScreenOptions} name="PostScreen" component={PostScreen} />
  </MainStack.Navigator>
)

const FavoritesStackComponent = () => (
	<MainStack.Navigator screenOptions={navigatorScreenOptions} initialRouteName="BookedScreen">
		<MainStack.Screen options={mainScreenOptions} name="BookedScreen" component={BookedScreen} />
		<MainStack.Screen options={postScreenOptions} name="PostScreen" component={PostScreen} />
	</MainStack.Navigator>
);




// create AboutScreenStuck

const AboutStuck = createStackNavigator();

const aboutScreenOptions = ({ navigation }) => ({
	title: 'О приложении',
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-camera" onPress={() => console.log('press photo')} />
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
		</HeaderButtons>
	)
});

const AboutStuckComponent = () => (
	<AboutStuck.Navigator screenOptions={navigatorScreenOptions}>
		<AboutStuck.Screen name="AboutScreen" options={aboutScreenOptions} component={AboutScreen} />
	</AboutStuck.Navigator>
);



// create CreateScreenStuck

const CreateStuck = createStackNavigator();

const createScreenOptions = ({ navigation }) => ({
	title: 'Создать пост',
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-camera" onPress={() => console.log(navigation)} />
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title="Take photo" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
		</HeaderButtons>
	)
});

const CreateStuckComponent = () => (
	<CreateStuck.Navigator screenOptions={navigatorScreenOptions}>
		<CreateStuck.Screen name="CreateScreen" options={createScreenOptions} component={CreateScreen} />
	</CreateStuck.Navigator>
);





// Create and configure Drawer

const Drawer = createDrawerNavigator();





// Create and configure Tabs

const tabNavigatorOptions = {
  activeTintColor: THEME.MAIN_COLOR,
}

const allPostsTab = {
	tabBarLabel: 'Всё',
	tabBarIcon: (info) => <Ionicons name="ios-albums" size={25} color={info.color} />
};

const favoritesPostsTab = {
	tabBarLabel: 'Избранное',
	tabBarIcon: (info) => <Ionicons name="ios-star" size={25} color={info.color} />
};

const Tab = createBottomTabNavigator();

const TabNavigatorComponent = () => (
	<Tab.Navigator tabBarOptions={tabNavigatorOptions}>
		<Tab.Screen options={allPostsTab} name="allPostsTab" component={MainStackComponent} />
		<Tab.Screen options={favoritesPostsTab} name="favoritesPostsTab" component={FavoritesStackComponent} />
	</Tab.Navigator>
);

const AppNavigation = () => {
  return (
		<NavigationContainer>
			<Drawer.Navigator drawerContentOptions={{ activeTintColor: THEME.MAIN_COLOR, labelStyle: { fontFamily: 'semiBold' } }}>
				<Drawer.Screen
					options={{ drawerLabel: 'Главная' }}
					name="MainScreenDrawer"
					component={TabNavigatorComponent}
				/>
				<Drawer.Screen
					options={{ drawerLabel: 'Создать пост' }}
					name="CreateScreenDrawer"
					component={CreateStuckComponent}
				/>
				<Drawer.Screen
					options={{ drawerLabel: 'О приложении' }}
					name="AboutScreenDrawer"
					component={AboutStuckComponent}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
  );
}

export default AppNavigation;