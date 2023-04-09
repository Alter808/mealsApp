import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const IconButton = ({ icon, onPress, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={30} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
})
