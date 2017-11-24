import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types'

export default class Input extends Component {
    static propTypes = {
        onSubmitEditing: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
    }
    state = {
        text: '',
    }

    onChangeText = text => this.setState({ text })

    onSubmitEditing = () => {
        const { onSubmitEditing } = this.props
        const { text } = this.state

        if (!text) return

        onSubmitEditing(text)
        this.setState({ text: '' })
    }

    render() {
        const { placeholder } = this.props
        const { text } = this.state

        return (
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
    },
})
