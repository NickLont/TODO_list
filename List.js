import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'


export default class List extends Component {
    static propTypes = {
        onPressItem: PropTypes.func.isRequired,
        list: PropTypes.arrayOf(PropTypes.string).isRequired,
    }
    renderItem = (text, i) => {
        const { onPressItem } = this.props
        console.log('onPressItem type is: ', typeof (onPressItem))

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onPressItem(i)}
                key={i}
            >
                <Text>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { list } = this.props
        return (
            <View>
                {list.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15,
    },
})
