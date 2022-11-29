import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';
import { db } from "../firebase";
import Mapa from "../assets/mapa.jpg";
import { logInUser } from './SignIn';

const CupoScreen = ({route, navigation}) => {

    const {cupo} = route.params;
    const {id, date, beginning, arrive, driverId, passengers, spaces, car, carId} = cupo;

    const [disabled,setDisabled]=useState(false)

    const [request, setRequest] = useState({
        date: new Date().toLocaleString(),
        cupoId: id,
        passengerId: logInUser,
        driverId: driverId,
      });
    
      const handleRequest = () => {
        setDisabled(true);
        insert(request);
      };
    
      async function insert(item) {
        try {
          const response = await db
            .collection("request")
            .where("cupoId", "==", item.cupoId)
            .get();
          let items = [];
          response.forEach((resp) => {
            items.push(resp.data());
          });
          await db.collection("request").add(item);
          alert("Se pidio un cupo");
          //navigation.navigate("HomeScreen");
        } catch (error) {
          alert(error);
        }
      }

    return(
        <View>
            <Text>CupoScreen Cupo</Text>
            <Text>Cupo Sapeee</Text>
            <Text>{id} asda {date}</Text>
            <Text>{beginning}{arrive}{driverId}</Text>
            <Text>{passengers}{spaces}</Text>
            <Text>{car}{carId}</Text>
            <Text>{logInUser}</Text>
            
            <View>
              <Image
                style={styles.imageMap}
                source={Mapa}
                resizeMode="contain"
              />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("DriverProfile")}
                style={styles.chatButton}
            >
                <Entypo name="user" size={24} color={colors.lightGray} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleRequest}
                disabled={disabled}
                style={styles.chatButton}
            >
                <Entypo name="ticket" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    )
}

export default CupoScreen;


const styles = StyleSheet.create({
    chatButton: {
      backgroundColor: colors.primary,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.primary,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .9,
      shadowRadius: 8,
      marginRight: 20,
      marginBottom: 50,
    },
    imageMap: {
      height: "55%",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  });