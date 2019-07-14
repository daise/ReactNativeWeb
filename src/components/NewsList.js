import React, { Component, Fragment } from 'react';
import { ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';
import Button from './Button';

class NewsList extends Component {
  state = { news: [] };

  componentWillMount() {
    axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=62be2fd3f38a462da612dc8f65104598')
      .then(response => { console.log('rrreeerrr', JSON.stringify(response.data.articles)); this.setState({ news: response.data.articles }) }) 
      .catch((e)=> console.log('network error'));
  }

  renderNews() {
 
    return this.state.news.map(news =>
      <NewsDetail key={news.title} news={news} />);
  }

  render() {
    console.log(this.state);
    const spinner = this.state.news.length === 0 ? <Fragment><ActivityIndicator size="large" color="#0000ff" /><Button>Loading News</Button></Fragment> : null;
    return (
      <ScrollView>
        {spinner}
        {this.renderNews()}
      </ScrollView>
    );
  }
}

export default NewsList;