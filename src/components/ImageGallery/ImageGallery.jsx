import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';
export const ImageGallery = ({ img }) => {
  return (
    <ImgGallery>
      {img.map(item => (
        <GalleryItem key={item.id} imgProps={item} />
      ))}
    </ImgGallery>
  );
};
