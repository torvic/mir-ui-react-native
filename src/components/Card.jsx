import { View, StyleSheet } from 'react-native'

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'http://placehold.it/32x32' }}
      />
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          nemo!
        </Text>
        <Text>by Fram Smith</Text>
        <View>
          <Text>LABEL 1</Text>
        </View>
        <Text>5 comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 66,
    height: 58,
  },
})

export default Card
