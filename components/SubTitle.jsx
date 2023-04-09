import { StyleSheet, Text, View } from 'react-native'

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
  subTitle: {
    color: '#d8bb78',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: '#d8bb78',
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  },
})
