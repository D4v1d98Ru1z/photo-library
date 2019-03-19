import React, { Component } from 'react';
import SearchBar from './SearchBar'
import GridImage from './GridImage'
import SearchAPI from '../api/api'

class App extends Component {
  state = {
    // Store the images
    images: []
  }

  // Bring the images by search
  handleSubmit = async input => {
    try{
      // Get the data from API in path search/photos
      const response = await SearchAPI.get('/search/photos', {
        params: {
          query: input
        }
      })
      this.setState({
        images: response.data.results 
      })
    }
    catch(err){
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
        />
        <GridImage
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
