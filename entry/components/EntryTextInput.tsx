import {StyleSheet, TextInput, View} from "react-native";

const EntryTextInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter text"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'top',
    },
});

export default EntryTextInput;