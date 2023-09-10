import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';
export const ImageGallery = ({ img, onClick }) => {
  return (
    <ImgGallery>
      {img.map(item => (
        <GalleryItem key={item.id} imgProps={item} onClick={onClick} />
      ))}
    </ImgGallery>
  );
};
