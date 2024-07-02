import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
    return (
        <View>
        <Pressable android_ripple={{color:'#dddddd'}} onPress={props.onDeleteHandler.bind(this,props.id)}
        style={({pressed})=>pressed&&styles.pressedItem}
        >
            <View style={styles.goalItem} key={props.id}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white',
        padding: 8,

    }
});