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
          <View style={styles.topBar}>
            <Text style={styles.text}>Informacion Del Cupo</Text>
            <Text style={styles.text}>Fecha: {date}</Text>
            <Text style={styles.text}>Lugar Origen: {beginning}</Text>
            <Text style={styles.text}>Lugar Destino: {arrive}</Text>
            <Text style={styles.text}>Cupos Disponibles: {spaces}</Text>
            <Text style={styles.text}>Pasajeros: {passengers}</Text>
            <Text style={styles.text}>Vehiculo: {car}</Text>
            <Text style={styles.text}>Placa: {carId}</Text>
          </View>
            
            
            <View>
              <Image
                style={styles.imageMap}
                source={Mapa}
                resizeMode="contain"
              />
            </View>

            <View style={styles.buttonContainer}>
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
    },
    text: {
      color: "black",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
    buttonContainer: {
      flexDirection: "row",
      marginLeft: 107,
      marginTop: 0
    },
    chatButton: {
      backgroundColor: colors.primary,
      height: 75, width: 75,
      borderRadius: 75,
      alignItems: "center",
      justifyContent: "center",
      margin: 10
  },
    
  });