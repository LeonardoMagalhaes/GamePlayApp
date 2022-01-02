import React from 'react';
import { 
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      console.log('aqui disgraça');
      await signIn();
    } catch (error) {
      Alert.alert(String(error)); // Convertendo error para string
    }
  }

  return (
    <Background>
      <View style={ styles.container }>
        <Image
          source={ IllustrationImg }
          style={ styles.image }
          resizeMode= 'stretch'
        />
        
        <View style={ styles.content }>
          <Text style={ styles.title }>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={ styles.subtitle }>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {
            loading ?
              <ActivityIndicator color={theme.colors.primary}/>
            :
            <ButtonIcon
              title='Entrar com Discord'
              onPress={ handleSignIn }
            />
          }          
        </View>
      </View>
    </Background>
  );
}
