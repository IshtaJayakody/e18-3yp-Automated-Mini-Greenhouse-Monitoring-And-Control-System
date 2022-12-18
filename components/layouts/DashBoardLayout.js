import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground, ScrollView,Dimensions} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import LogoutButton from '../items/LogoutButton'
import ControlCard from '../items/ControlCard';
import DashboardCard from '../items/DashboardCard';
import { AuthContext } from '../context/AuthContext';
import {React,useContext} from 'react';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";

function DashBoardLayout({navigation}){
    const image = require("./images/Dashboard.png");
    const imageIcon1= require("./images/temperature-low.png");
    const imageIcon2= require("./images/humidityImage.png");
    const imageIcon3= require("./images/heightImage.png");
    const imageIcon4= require("./images/lightHours.png");
    const imageIcon5= require("./images/soilMoistureImage.png");
    const imageIcon6= require("./images/temperature-low1.png");
    const imageIcon7= require("./images/humidityImage1.png");
    const imageIcon8= require("./images/heightImage1.png");
    const imageIcon9= require("./images/lightHours1.png");
    const imageIcon10= require("./images/soilMoistureImage1.png");
    

    const {userInfo,logout} = useContext(AuthContext);

    return(

        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>

                <DashboardCard icon={imageIcon1} currentVal="1.111" highVal={"1.111"} lowVal="1.111"  heightFromTop="-10%"></DashboardCard>
                <DashboardCard icon={imageIcon2} currentVal="1.111" highVal={"1.111"} lowVal="1.111"  heightFromTop="-8%"></DashboardCard>
                <DashboardCard icon={imageIcon3} currentVal="1.111" highVal={"1.111"} lowVal="1.111"  heightFromTop="-6%"></DashboardCard>
                <DashboardCard icon={imageIcon4} currentVal="1.111" highVal={"1.111"} lowVal="1.111"  heightFromTop="-4%"></DashboardCard>
                <DashboardCard icon={imageIcon5} currentVal="1.111" highVal={"1.111"} lowVal="1.111"  heightFromTop="-2%"></DashboardCard>
            

                <View style={styles.container4} >
                    <Image source={imageIcon6} resizeMode="center" style={styles.imageContainer}></Image>
                    <Image source={imageIcon7} resizeMode="center" style={styles.imageContainer}></Image>
                    <Image source={imageIcon8} resizeMode="center" style={styles.imageContainer}></Image>
                    <Image source={imageIcon9} resizeMode="center" style={styles.imageContainer}></Image>
                    <Image source={imageIcon10} resizeMode="center" style={styles.imageContainer}></Image>
                </View>

                <View top={"7%"}>
                        
                        <LineChart
                            data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={200}
                            yAxisLabel="$"
                            yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => "#372604",
                            labelColor: (opacity = 1) => "#372604",
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                        />
                </View>

                <View style={styles.container3}>
                    <LogoutButton text={"Exit"} heightFromTop="110%" onPress={logout} ></LogoutButton>
                    <ButtonWhite text={"Control"} heightFromTop="110%" location={() => navigation.navigate('Control')} ></ButtonWhite> 
                </View>

                

                
        </View>


            <StatusBar style="auto" />

            

        </ImageBackground>
        
     );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    
    },

    container2:{
        flexDirection: "column",
        gap:"2rem",
        
    },

    container3:{
        
        
        flexDirection: "row",

        //backgroundColor:"red",

        justifyContent:"space-between"
        
        
        
    },

    container4:{
        
        height:30,
        width: 350,
        flexDirection: "row",
        //backgroundColor:"green",
        justifyContent:"space-between",
        alignSelf:"center",
        top:"10%"
   
    },

    imageContainer: {
        //backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
        width:30,
        height:30,
        alignSelf:"center",
        flexDirection:"row",
        
    }

  });

  export default DashBoardLayout ;