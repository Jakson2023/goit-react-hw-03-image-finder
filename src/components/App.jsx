import { AppGallery } from "./App.styled";
import { Component } from "react";
import { SearchbarHead } from "./Searchbar/Searchbar";
export class App extends Component {
  render() {
  return (
    <AppGallery>
     <SearchbarHead/>
    </AppGallery>
  )
}
};