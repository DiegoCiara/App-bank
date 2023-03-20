import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { client } from './labels';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { BugetCard, ContentBudget, ContentValue, Divisor, JustTitleValue, TitleValue, ViewRigthIcon } from './src/styles/BudgetCard';
import { MicroText, Value } from './src/styles/Texts';
import { ThemeProvider } from 'styled-components';
import  Theme  from './src/styles/Theme';
import { ImageCard } from './src/styles/CardImage';
import { ContentMicroCard, MicroCard, Minicard, ViewMicroCards } from './src/styles/MiniCards';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
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


      <ScrollView style={styles.scrum} showsVerticalScrollIndicator={false}>
          <BugetCard>
            <ContentValue>
              <JustTitleValue>
                <TitleValue>
                <MaterialIcons name="attach-money" style={styles.valueicon}/>
                <Text> Saldo Liberado</Text>
                </TitleValue>
                <Value>R$ {client.value}</Value>
              </JustTitleValue>
              <ViewRigthIcon>
                <AntDesign name="right" style={{color: Theme.color.main}} />
              </ViewRigthIcon>
            </ContentValue>
            <Divisor/>
            <ContentBudget>
            <Text  style={{color: Theme.color.main}} >
                Saldo a liberar:
              </Text>
              <Text>
                {client.budget}
              </Text>
            </ContentBudget>
        </BugetCard>

        <ViewMicroCards>
        <ContentMicroCard>
            <MicroCard>
              <MaterialIcons name="attach-money" style={styles.valueicon}/>
            </MicroCard>
            <MicroText>
              Contratos
            </MicroText>
          </ContentMicroCard>
          <ContentMicroCard>
            <MicroCard>
              <MaterialIcons name="attach-money" style={styles.valueicon}/>
            </MicroCard>
            <MicroText>
              Valores
            </MicroText>
          </ContentMicroCard>
          <ContentMicroCard>
            <MicroCard>
              <MaterialIcons name="attach-money" style={styles.valueicon}/>
            </MicroCard>
            <MicroText>
              Transferir
            </MicroText>
          </ContentMicroCard>
          <ContentMicroCard>
            <MicroCard>
              <MaterialIcons name="attach-money" style={styles.valueicon}/>
            </MicroCard>
            <MicroText>
              Solicitar
            </MicroText>
          </ContentMicroCard>
        </ViewMicroCards>

          <ImageCard  source={require('./imagecard.png')}/>
          <Minicard>
              <Text >
                Mais produtos
              </Text>
              <AntDesign name="right" style={{color: Theme.color.main}} />
          </Minicard>
          <Minicard>
              <Text >
                Mais produtos
              </Text>
              <AntDesign name="right" style={{color: Theme.color.main}} />
          </Minicard>


      </ScrollView>


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
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({


  scrum: {
    maxWidth: '85%',

  },





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
    height: '14%', 
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
  valueicon:{
    color: '#C60000',
    fontSize: '30px',
    textAlign:' center',
    marginLeft: '3%',
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
    width: '100%',
  },

// Footer
  footer:{
    display:'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor: '#C60000',
    width: '100%',
    height: '8%', 
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
