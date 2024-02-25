
import {  Spinner } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loading}>
    <Spinner />
  </View>
  )
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Loader