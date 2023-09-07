import { ButtonLabel } from "./Searchbar.styled"
import { SearchForminput } from "./Searchbar.styled"
import { SearchForm } from "./Searchbar.styled"
import { Searchbar } from "./Searchbar.styled"
import { SearchFormbutton } from "./Searchbar.styled"
export const SearchbarHead = () =>{
    return (
    <Searchbar class="searchbar">
  <SearchForm class="form">
    <SearchFormbutton type="submit" class="button">
      <ButtonLabel class="button-label">Search</ButtonLabel>
    </SearchFormbutton>

    <SearchForminput
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</Searchbar>

    )
}