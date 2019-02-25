import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import FilmDetail from '../src/components/FilmDetail';
import axious from 'axios';
import Spinner from '../src/components/Spinner';

export default class ShowFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmler: [],
      loading: true,
      error: null,
      refreshing: false,
      fetching_from_server: false,
      page : 1,
      title : this.props.navigation.getParam('title', 'NO-ID')
    };
     
    
     
  }

  componentDidMount() {

    console.log(this.state.filmler) 

  }
  componentDidMount() {
    this.getRemoteFilms();
  }
  getRemoteFilms() {
   
    
    //console.log(desiredURL);
    
    this.setState({ loading: true });
    console.log("Requesting...")
    axious.get(`https://api.themoviedb.org/3/discover/movie?api_key=6e651f759c6ce3b958239d342e520114&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_genres=${this.state.title}`).then((response) => {
      this.setState({ filmler: [...this.state.filmler, ...response.data.results],loading:false })
    });
    


  } 

  /* renderFilms() {
   
    return this.state.filmler.map(film =>
      <FilmDetail key={film.title} film={film} />
      );
    } */

 
  _renderItem = ({ item }) => (
    <FilmDetail key={item.title} film={item} />
  );

  _loadMore = () => {
    this.state.page=this.state.page+1;
    axious.get(`https://api.themoviedb.org/3/discover/movie?api_key=6e651f759c6ce3b958239d342e520114&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_genres=${this.state.title}`).then((response) => {
      
      this.setState({ filmler: [...this.state.filmler, ...response.data.results],fetching_from_server:false})
    });
    
    url=`https://api.themoviedb.org/3/discover/movie?api_key=6e651f759c6ce3b958239d342e520114&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.page}&with_genres=${this.state.title}`;
    console.log("URL="+url);
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <FlatList
        data={this.state.filmler}
        renderItem={this._renderItem}
        extraData={this.state}
        keyExtractor={item => item.title}
        onEndReachedThreshold={5}
        onEndReached={this._loadMore}
      />
      </View> 
      /* 
      <ScrollView>
        {this.renderFilms()}
      </ScrollView>
 */

    );
  }
}
