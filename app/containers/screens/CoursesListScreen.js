import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Appbar, Card, Paragraph} from 'react-native-paper';
import {primary} from '../../values/colors';

const DATA = [
  {
    id: '1',
    title: 'Your First Mobile App',
    cover: 'https://picsum.photos/563',
    content:
      'Mobile Applications can be built using many tools and frameworks. Understand the words, native, android, ios. Get a complete quickstart guide here. Looging forward to meet you',
  },
  {
    id: '2',
    title: 'Your First Web App',
    cover: 'https://picsum.photos/234',
    content:
      'Mobile Applications can be built using many tools and frameworks. Understand the words, native, android, ios. Get a complete quickstart guide here. Looging forward to meet you',
  },
  {
    id: '3',
    title: 'Your First Game',
    cover: 'https://picsum.photos/333',
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

export default function CoursesListScreen() {
  const renderItem = ({item}) => (
    <Item title={item.title} content={item.content} cover={item.cover} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{backgroundColor: primary}}>
        <Appbar.Content title="Edshop" />
      </Appbar.Header>
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
