import { ImgGalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const GalleryItem = ({ imgProps, onClick }) => {
  return (
    <ImgGalleryItem className="gallery-item">
      <GalleryImg
        src={imgProps.webformatURL}
        alt=""
        onClick={() => {
          onClick(imgProps.largeImageURL);
        }}
      />
    </ImgGalleryItem>
  );
};
