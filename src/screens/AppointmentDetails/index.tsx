import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Leonardo',
      avatar_url: 'https://github.com/LeonardoMagalhaes.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Leonardo',
      avatar_url: 'https://github.com/LeonardoMagalhaes.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da m10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title='Jogadores'
        subtitle='Total 3'
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        style={styles.members}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
      />

      <View style={styles.footer}>
        <ButtonIcon
          title='Entrar na partida'
        />
      </View>      
    </Background>
  );
}
