import { AppGallery } from "./App.styled";
import { Component } from "react";
import { SearchbarHead } from "./Searchbar/Searchbar";
import { serviceReq } from "./Api/Api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
 export class App extends Component {
  
state = {
  query: '',
  images:[],
  page: 1
}


  handleSubmit = e => {
e.preventDefault();
this.setState({
query: e.target.elements.query.value,
images:[],
page: 1


})
console.log(this.state);


  }
  
 async componentDidUpdate(prevProps, prevState){
    if(prevState.query !== this.state.query){

    }

    try {
      const req = await serviceReq();
      console.log(req);
      this.setState({query: req})
    
    } catch (error) {
      
    }
  }
  
  
  
  render() {
  return (
    <AppGallery>
     <SearchbarHead onSubmit={this.handleSubmit}/>
     <ImageGallery/>
    </AppGallery>
  )
}
};