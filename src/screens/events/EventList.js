import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import EventList from '../../components/event/EventList'


class EventListScreen extends Component {
    static propTypes = {};

    static navigationOptions = {
        title: 'Event List'
    }

    render() {
        return (
            <EventList onEventPress = {this.handleEventPress}/>
        )
    }

    handleEventPress = (uid) => {
        this.props.navigation.navigate('event', {uid})
    }
}

export default EventListScreen