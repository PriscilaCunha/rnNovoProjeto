import React from 'react';
import { ScrollView, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>
        ~{"\n\n\n"}
        Turma IGTI
      </Text>

      <View>
        <Text>Desenvolvedor Mobile</Text>

        <Image
          source={{
            uri: "https://cdn.icon-icons.com/icons2/2699/PNG/512/android_official_logo_icon_167880.png"
          }}
          style={{ width: 170, height: 200 }}
        />
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue='Insira um texto'
      />
    </ScrollView>
  );
}