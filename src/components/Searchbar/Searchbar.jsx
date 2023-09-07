import { ButtonLabel } from "./Searchbar.styled"
import { SearchForminput } from "./Searchbar.styled"
import { SearchForm } from "./Searchbar.styled"
import { Searchbar } from "./Searchbar.styled"
import { SearchFormbutton } from "./Searchbar.styled"
export const SearchbarHead = ({onSubmit}) =>{
    return (
    <Searchbar >
  <SearchForm >
    <SearchFormbutton type="submit"  >
      <ButtonLabel onSubmit={onSubmit}>Search</ButtonLabel>
    </SearchFormbutton>

    <SearchForminput
    
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</Searchbar>

    )
}