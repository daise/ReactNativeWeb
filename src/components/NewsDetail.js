import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const NewsDetail = ({ news }) => {
  console.log(news)
  const { title, artist, urlToImage, image, url, description, content } = news;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    descriptionTextStyle,
  } = styles;

  return (
    <Card>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: urlToImage }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        style={imageStyle}
        source={{ uri: urlToImage }}
      />
    </CardSection>
    <CardSection>
    <View >
      <Text style={descriptionTextStyle}>{description}</Text>
      <Text style={descriptionTextStyle}>{content}</Text>
      <Text>{artist}</Text>
    </View>
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Read More
      </Button>
    </CardSection>
  </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 20,
    marginRight: 60,
    width: 900
  },
  descriptionTextStyle: {
    fontSize: 18,
    marginRight: 60,
    width: 900
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default NewsDetail;
