import { ImgGalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const GalleryItem = ({ imgProps }) => {
  return (
    <ImgGalleryItem className="gallery-item">
      <GalleryImg src={imgProps.webformatURL} alt="" />
    </ImgGalleryItem>
  );
};
