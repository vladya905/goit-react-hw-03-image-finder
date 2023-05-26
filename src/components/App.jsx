import React, { Component } from 'react';
import {Modal} from './Modal/Modal';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import {Button} from './Button/Button';
import {MyLoader} from './Loader/Loader'
import s from './App.module.css';

class App extends Component {
  state = {
    selectedImage: '',
    arrayImage: [],
    inputValue: '',
    page: 1,
    error: false,
    status: 'idle',
    totalHits: 0,  // Add this to your state
  }

  componentDidUpdate(prevProps, prevState) {
   if (this.state.inputValue !== prevState.inputValue || this.state.page !== prevState.page) { 
     fetch(`https://pixabay.com/api/?key=36047309-6afabc13df76b1d6d60efac24&q=${this.state.inputValue}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => this.setState(prevState => ({
          arrayImage: [...prevState.arrayImage, ...res.hits],
          totalHits: res.totalHits,
      })))
      .then(() => this.setState({status: 'resolved'}))
      .catch(e => this.setState({error: true}));
    }
  }

  formSubmitHandler = ({inputValue}) => {
    if (inputValue.trim() !== '') {
      this.setState({inputValue, page: 1, arrayImage: [], status: 'pending'});  // Reset arrayImage on new search
      return;
    }
    alert('Введіть текс для пошуку');
  };
  
  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
  };

  handleSelectImage = data => this.setState({selectedImage: data});

  closeModal = () => this.setState({selectedImage: ''});

  render() {
    const {selectedImage, arrayImage, status} = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmitHandler}/>
        {status === 'pending' && <MyLoader/>}
        {status === 'resolved' && <ImageGallery images={arrayImage} onSelect={this.handleSelectImage}/>}
        {(status === 'resolved' && arrayImage.length < this.state.totalHits) && <Button onClick={this.onClickButton}/>} 
                {selectedImage && <Modal image={selectedImage} onClose={this.closeModal}/>}
      </div>
    );
  }
}

export default App;