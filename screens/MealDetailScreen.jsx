import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import List from '../components/List'
import IconButton from '../components/IconButton'

const MealDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const headerButtonPressHandler = () => {
    console.log('pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={headerButtonPressHandler}
          icon='star'
          color='#d8bb78'
        />
      ),
    })
  }, [navigation, headerButtonPressHandler])

  const id = route.params.mealId
  mealDetail = MEALS.find((meal) => meal.id === id)

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: mealDetail.imageUrl }} style={styles.mealImage} />
      <Text style={styles.title}>{mealDetail.title}</Text>
      <MealDetails
        duration={mealDetail.duration}
        complexity={mealDetail.complexity}
        affordability={mealDetail.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={mealDetail.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={mealDetail.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  mealImage: {
    height: 350,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
})
