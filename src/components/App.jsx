import { AppGallery } from './App.styled';
import { Component } from 'react';
import { SearchbarHead } from './Searchbar/Searchbar';
import { serviceReq } from '../api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { ModalWindow } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    loading: false,
    images: [],
    page: 1,
    query: '',
    isModalOpen: false,
    end: true,
  };

  handleSubmit = search => {
    this.setState({ query: search, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const imageData = await serviceReq(query, page);
        const imagesOnly = imageData.hits.map(
          ({ webformatURL, largeImageURL, id }) => {
            return { webformatURL, largeImageURL, id };
          }
        );

        if (
          imageData.hits.length / 12 < 1 &&
          imageData.totalHits !== page * 12
        ) {
          this.setState({ end: false });
          alert('The last page will be loaded!');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...imagesOnly],
        }));
      } catch (error) {
        this.setState({ end: true });
        console.error('Error fetching images:', error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  toggleModal = setImage => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      key: setImage,
    }));
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <AppGallery>
        <SearchbarHead onSubmit={this.handleSubmit} />
        <ImageGallery img={this.state.images} onClick={this.toggleModal} />
        {this.state.images.length > 0 && this.state.end && (
          <LoadMore onClick={this.loadMore} />
        )}
        {this.state.loading && <Loader />}
        <ModalWindow
          onToggle={this.toggleModal}
          modalState={this.state.isModalOpen}
          modalImage={this.state.key}
        />
      </AppGallery>
    );
  }
}
