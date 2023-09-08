import { BtnLoadMore } from './Button.styled';
export const LoadMore = ({ onClick }) => {
  return (
    <BtnLoadMore type="" class="button" onClick={onClick}>
      <span class="button-label">Load More</span>
    </BtnLoadMore>
  );
};
