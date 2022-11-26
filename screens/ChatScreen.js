import React,{useState} from "react";
import { Text } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {
    const [message, setMessage] = useState([]);
    return(
        <GiftedChat/>
    );
}
