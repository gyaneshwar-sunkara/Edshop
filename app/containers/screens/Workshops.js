import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Your First Mobile App',
    cover: 'https://picsum.photos/700',
    content:
      'Mobile Applications can be built using many tools and frameworks. Understand the words, native, android, ios. Get a complete quickstart guide here. Looging forward to meet you',
  },
  {
    id: '2',
    title: 'Your First Web App',
    cover: 'https://picsum.photos/200',
    content:
      'Mobile Applications can be built using many tools and frameworks. Understand the words, native, android, ios. Get a complete quickstart guide here. Looging forward to meet you',
  },
  {
    id: '3',
    title: 'Your First Game',
    cover: 'https://picsum.photos/100',
    content:
      'Mobile Applications can be built using many tools and frameworks. Understand the words, native, android, ios. Get a complete quickstart guide here. Looging forward to meet you',
  },
];

const Item = ({title, cover, content}) => (
  <Card style={styles.item}>
    <Card.Cover source={{uri: cover}} />
    <Card.Title title={title} />

    <Card.Content>
      <Paragraph>{content}</Paragraph>
    </Card.Content>
  </Card>
);

export default function Workshops() {
  const renderItem = ({item}) => (
    <Item title={item.title} content={item.content} cover={item.cover} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: '2%',
    marginHorizontal: '2%',
  },
});
