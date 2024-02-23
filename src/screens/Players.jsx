import { ScrollView, Text , View } from "react-native"
import { useEffect, useState } from "react";
import { usePlayersQuery } from "../redux/features/players";
import FootballPlayerCard from "../components/FootballPlayerCard";


const Players = () => {

  const {data:playersApi , isSuccess } = usePlayersQuery({});
  const [players , setPlayers ] = useState([]);
  
  useEffect(()=>{
    if(playersApi && isSuccess){
      setPlayers(playersApi.data)
    }
  },[playersApi])

  return (
    <ScrollView>
      { playersApi && isSuccess ? (
        players.map((player) => (
          <FootballPlayerCard key={player.id} player={player} />
        ))
      ) : (
        <Text>Loading players...</Text>
      )}
    </ScrollView>  
    )
}




export default Players