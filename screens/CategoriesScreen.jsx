import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { useNavigation } from '@react-navigation/native'

const CategoriesScreen = () => {
  const navigation = useNavigation()
  //render item
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        catName: itemData.item.title,   
      })
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
