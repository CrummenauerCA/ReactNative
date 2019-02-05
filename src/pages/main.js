import React, { Component } from 'react';
import { View, Text } from "react-native";
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JShunt',
    };

    state = {
        docs: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;
        console.log(docs);
        this.setState({
            docs
        });
        console.log(docs);
    };

    render() {
        return (
            <View>
                <Text>Número de itens: {this.state.docs.length}</Text>
                {this.state.docs.map(product => <Text key={product._id}>{product.title}</Text>)}
            </View>
        );
    }
}