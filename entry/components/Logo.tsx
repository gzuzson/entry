import React from 'react';
import {StyleSheet, Image, View} from "react-native";

const Logo: React.FC = () => {
    return (
        <View>
            <Image
                source={require('../assets/images/react-logo.png')}
                style={styles.logo}
                resizeMode="contain"

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    logo: {
        width: 100,
        height: 100,
    },
});

export default Logo;