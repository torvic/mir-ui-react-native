import { View, StyleSheet, Image, Text } from 'react-native'

const Card = ({ data }) => {
  console.log('data', data)
  return (
    <View style={styles.container}>
      <View style={styles.figure}>
        <Image
          style={styles.image}
          source={{ uri: 'http://placehold.it/32x32' }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.about.slice(0, 30)}</Text>
        <Text style={styles.name}>{`by ${data.author}`}</Text>
        <View style={styles.label}>
          <Text style={styles.labelText}>LABEL 1</Text>
        </View>
        <Text style={styles.comment}>5 comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    borderBottomColor: 'black',
    borderWidth: 1,
  },
  figure: {
    flex: 1,
    width: '50%',
    height: 150,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    padding: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    fontSize: 12,
  },
  label: {
    padding: 3,
    backgroundColor: 'gray',
  },
  labelText: {
    fontSize: 8,
    color: 'white',
  },
  comment: {
    fontSize: 10,
  },
})

export default Card
