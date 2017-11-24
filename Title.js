import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'

const Title = (props) => {
    const { children } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}
Title.propTypes = {
    children: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        padding: 15,
    },
    title: {
        textAlign: 'center',
        color: 'white',
    },
})

export default Title
