import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route}) => ({
            tabBarIcon: ({ focues, color, size}) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName = focused
                        ? 'book'
                        : 'book_outline';
                } else if (route.name === 'CreatePost') {
                    iconName = focues ? 'create' : 'create-outline';
                }
                return <Ionicons name ={iconName} size={size} color={color}/>;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CriarPost" component={CreatePost}/>
</Tab.Navigator>
    );
}

export default BottomTabNavigator