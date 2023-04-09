import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: { backgroundColor: '#5c2d13' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{ title: 'Categories' }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview' }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{
              title: 'Meal Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
