import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomButton from "../components/CustomButton";
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';


const RequestScreen = ({route, navigation}) => {

    const {id, date, cupoId, passengerId, driverId} = route.params;

    return(
        <View>
            <Text>Request Screen</Text>
            <Text>Id request: {id}</Text>
            <Text>Fecha: {date}</Text>
            <Text>Id cupo: {cupoId}</Text>
            <Text>Id pasajero: {passengerId}</Text>
            <Text>Id conductor:{driverId}</Text>
        </View>
    )
}

export default RequestScreen;