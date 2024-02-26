import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectFavoriteMatches } from '../redux/features/match/matchSelectors';
import FootballMatchCard from '../components/FootballMatchCard';

const FavoriteMatches = () => {
 
  const favoriteState = useSelector(selectFavoriteMatches);
      const [favMatches , setFavMatches] = useState([])
      useEffect(() => {
        favoriteState && setFavMatches(favoriteState);
      }, [favoriteState]);

      return (
        <View style={styles.container}>
          {favMatches.length === 0 ? (
             <View style={styles.center}>
             <Text>There is no favorite matches</Text>
           </View>
          ) : (
            <ScrollView>
              {favMatches.map((match) => (
                <FootballMatchCard key={match.id} isFav={true} match={match} />
              ))}
            </ScrollView>
          )}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

export default FavoriteMatches;


