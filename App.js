import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { client } from './labels';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Card } from './src/styles/Cards';
import { BugetCard } from './src/styles/styles';





export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar color='white' />
      <View style={styles.menu}>
        <View  style={styles.clientcontent}>
        <Text style={styles.subtitle}>
            Olá
          </Text>
          <Text  style={styles.client}>
            {client.name}
          </Text>
        </View>
        <FontAwesome name="user-circle-o"  style={styles.usericon}/>
      </View>


      <BugetCard>
          <View style={styles.contentvalue}>
            <View styles={styles.justtitilevalue}>
              <View style={styles.titlevalue}>
              <MaterialIcons name="attach-money" style={styles.valueicon}/>
              <Text> Saldo Liberado</Text>
              </View>
              <Text style={styles.value}>R$ {client.value}</Text>
            </View>
            <View style={styles.righticon}>
              <AntDesign name="right" style={styles.righticon} />
            </View>
          </View>

          <View>
            <Text>
              Saldo a
            </Text>
          </View>
        </BugetCard>


      <View style={styles.contentcard}>
        <View style={styles.minicard}>
          <Text >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ad.{' '}
          </Text>
        </View>
        <View style={styles.minicard}>
          <Text >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ad.{' '}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
      <Entypo name="home" style={styles.footericon} />
      <View style={styles.supgambiicon}> 
        <View style={styles.gambiicon}>
          <MaterialIcons name="attach-money" style={styles.budgeticon}/>
          </View>      
      </View>
      <MaterialIcons name="speaker-notes" style={styles.footericon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusbar:{
    color: '#ffffff',
  },
  container: {
    color: '#ffffff',
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // menu
  menu: {
    display:'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor: '#C60000',
    width: '100%',
    height: '15%', 
    justifyContent: 'space-between',
  },
  clientcontent: {
    marginTop: '4%',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  usericon: {
    marginTop:'10%',
    marginRight: '5%',
    fontSize: '40px',
    color: '#ffffff',
  },
  client: { 
    color: '#ffffff',
    fontSize: '20px', 
    fontWeight: 700
  },
  subtitle: {
    color: '#ffffff',
  },


  
// Budget Card  

  budgetcard: {
    display: 'flex',
    flexDirection:'column',
    width:'80%',
    backgroundColor: '#ffffff',
    // padding: '10%',
    borderRadius: '10px',
    margin: '5%',
    justifyContent: 'space-between',
  },
  contentvalue:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  justtitilevalue: {
    justifyContent:'center',
  },
  titlevalue: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueicon:{
    color: '#C60000',
    fontSize: '50px',
    textAlign:' center',
    marginLeft: '3%',
  },
  righticon: {
    color: '#c60000',
    size: 20,
    alignItems: 'center',
    justifyContent:'center'
  },
  value: {
    fontSize: '30px', 
    textAlign: 'center',
  },
  shadowProp: {  
    shadowOffset: {width: 0, height: 4},  
    shadowColor: '#0000',  
    shadowOpacity: 0.2,  
    shadowRadius: 2,  
  },


// Mminicards
  minicard: {
    backgroundColor: '#ffffff',
    padding: '5%',
    borderRadius: '20px',
    margin: '5%',
    marginBottom: '3%',
    marginTop: '0%',
    borderWidth: '1px',
    borderColor: '#C60000',
  },

// Footer
  footer:{
    display:'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor: '#C60000',
    width: '100%',
    height: '10%', 
    alignItems: 'center',
    justifyContent: 'space-between',
    },
    supgambiicon: {
      alignItems: 'center',
      textAlign:' center',
    },
    budgeticon:{
      textAlign:'center',
      margin: 2,
      fontSize: 36,
      color: '#c60000',
      borderRadius: '24%',
      padding: 5,
      borderWidth: '1px',
    },
  
    gambiicon:{
      backgroundColor: '#ffff',
      textAlign:' center',
      alignItems: 'center',
      borderRadius: '25%',
      borderWidth: '1px',
    },
    footericon: {
      marginLeft: '10%',
      marginRight: '10%',
      fontSize: '40px',
      color: '#ffffff',
    },
  
  
});
