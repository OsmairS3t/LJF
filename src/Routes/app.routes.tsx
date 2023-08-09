import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home';
import { Balance } from '@screens/Balance';
import { ListBalance } from '@screens/ListBalance';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='balance' component={Balance} />
            <Screen name='listbalance' component={ListBalance} />
        </Navigator>
    )
}
