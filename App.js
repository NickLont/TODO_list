import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import List from './List';
import Input from './Input';
import Title from './Title';
import { actionCreators } from './todoListRedux';

const mapStateToProps = state => ({
    todos: state.todos,
});
class App extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.string).isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    onAddTodo = (text) => {
        const { dispatch } = this.props;

        dispatch(actionCreators.add(text));
    }
    onRemoveTodo = (index) => {
        const { dispatch } = this.props;

        dispatch(actionCreators.remove(index));
    }

    render() {
        const { todos } = this.props;
        console.log('type of todos is: ', typeof (todos));

        return (
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder="Type a todo, then hit enter!"
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(App);
