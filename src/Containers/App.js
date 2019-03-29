import React, { Component } from 'react';
import SearchBar from './SearchBar'
import GridImage from '../Components/GridImage'
import SearchAPI from '../api/api'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
  state = {
    // Store the images
    images: [],
  }
  
  /**
   * Lifecycle method to update the state
   * @returns {data} the recent posts from unsplash
   * 
   */   
  componentDidMount(){
    // Get the recent posts
    SearchAPI.get('/photos')
    .then(response => {
      // Updating the state asynchronously
      this.setState({
        images: response.data
      })
    })
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
      console.log('Last: ',response)
    }
    catch(err){
      console.log(err)
    }
  }


  render() {
    return (
      <div>
        <ErrorBoundary>
          <SearchBar
            handleSubmit={this.handleSubmit}
          />
          <GridImage
            images={this.state.images}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
