import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View/* , Platform */ } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Guilds } from '../Guilds';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { GuildProps } from '../../components/Guild';
import { TextArea } from '../../components/TextArea';
import { GuildIcon } from '../../components/GuildIcon';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
// import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuild() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    // Deveria ser o <Background> ao invés de <View>, mas está quebrando a tela
    <KeyboardAvoidingView /* behavior={Platform.OS === 'ios' ? 'padding' : 'height'} */>
      <ScrollView>
        <Header title='Agendar partida'/>

        <Text style={[
          styles.label,
          { marginTop: 36, marginBottom: 18, marginLeft: 24 }]}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={handleCategorySelect}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {
                guild.icon ? <GuildIcon /> : <View style={styles.image}/>
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  { guild.name ?? 'Selecione um servidor' }
                </Text>
              </View>
              <Feather
                name='chevron-right'
                color={ theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Dia e mês
              </Text>

              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>

            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Hora e minuto
              </Text>
              
              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>
          </View> 

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title='Agendar'/>
          </View>
        </View>
      </ScrollView>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuild}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
