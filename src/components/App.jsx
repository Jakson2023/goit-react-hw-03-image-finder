import { AppGallery } from './App.styled';
import { Component } from 'react';
import { SearchbarHead } from './Searchbar/Searchbar';
import { serviceReq } from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { ModalWindow } from './Modal/Modal';
export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isModalOpen: false,
  };

  handleSubmit = search => {
    console.log(search);
    this.setState({ query: search, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    const { page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const req = await serviceReq(query, page);
        console.log(req);
        if((req.hits.length/12) < 1 && req.totalHits !== page*12){
          alert("Eror")
        }
        this.setState(prevState => ({
          images: prevState.images.concat(req.hits),
        }));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  }

  toggleModal = (key) => {
    console.log(key);
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };




  render() {
    
    return (
      <AppGallery>
        <SearchbarHead onSubmit={this.handleSubmit} />
        <ImageGallery img={this.state.images} onClick={this.toggleModal} />
        {this.state.images.length > 0 && <LoadMore onClick={this.loadMore} />}
        <ModalWindow onToggle={this.toggleModal} modalState={this.state.isModalOpen} img={this.state.images}/>
      </AppGallery>
    );
  }
}
