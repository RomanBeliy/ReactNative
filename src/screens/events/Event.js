import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Event from '../../components/event/Event'


class EventScreen extends Component {
    static propTypes = {};

    static navigationOptions = ({navigation}) => {
        title: `Event ${navigation.state.params.uid}`
    }

    render() {
        
        return (
            <Event/>
        )
    }
}

export default EventScreen