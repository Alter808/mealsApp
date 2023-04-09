import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import MealDetails from './MealDetails'

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPressHandler,
}) => {
  const [pressed, setPressed] = useState(false)

  const pressInHandler = () => {
    setPressed(true)
  }
  const pressOutHandler = () => {
    setPressed(false)
  }
  return (
    <View
      style={[
        styles.mealItem,
        pressed ? styles.itemPressed : styles.itemUnpressed,
      ]}
    >
      <Pressable
        android_ripple={{ color: '#9d9eac' }}
        onPressIn={pressInHandler}
        onPressOut={pressOutHandler}
        onPress={onPressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.itemImage} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    elevation: 8,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemPressed: { elevation: 0 },
  itemUnpressed: { elevation: 8 },
  imageContainer: {
    borderRadius: 8,
  },
  itemImage: {
    height: 200,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
})
