import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import Card from '../common/Card'

class EventCard extends Component {

    static propTypes = {

    };


    render() {
        const {children, style} =  this.props
        return (
            <Card style={styles.container}>
                <Image style = {styles.image} 
                    source={{uri: 'http://lorempixel.com/400/200/technics/'}}
                />
                <View style={styles.description}>
                    <Text>{this.props.event.title}</Text>
                    <Text>{this.props.event.url}</Text>
                </View>    
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50
    },
    container: {
        flexDirection: 'row'
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default EventCard