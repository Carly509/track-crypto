import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import  {images} from '../Utils/CoinIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';


export class CryptoContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount () {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const {crypto} = this.props;
        return crypto.data.map((coin) => 
        <CoinCard
        key ={coin.name}
        coin_name = {coin.name}
        price_usd= {coin.price_usd}
        percent_change_24hr= {coin.percent_change_24hr}
        percent_change_7d = {coin.percent_change_7d}
        />
        )
    }

    render() {
        const crypto = this.props;
        const {contentContainer} = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={'loading...'}
                        textStyle={{color: '#253145'}}
                        animation='fade'
                    />
                    <Text> prop </Text>
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer)


// const CryptoContainer = () => {

//     React.useEffect(() => {

//     }, [])

//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

// export default CryptoContainer

// const styles = StyleSheet.create({})

