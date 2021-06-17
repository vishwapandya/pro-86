import React,{Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.8}}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logOutConatiner}>
                    <TouchableOpacity
                    style={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}
                    >
                        <Text style={styles.logOutText}>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    logOutConatiner:{
        flex:0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    logOutButton:{
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10,
    },
    logOutText:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})