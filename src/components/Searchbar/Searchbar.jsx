import {Component} from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    handleInputChange = evt => {
        this.setState( {inputValue: evt.currentTarget.value} );
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({inputValue: ''});
    };

    render() {
        return (
            <div className={s.Searchbar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <input
                        type="text"
                        className={s.SearchFormInput}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className={s.SearchFormButton}></button>
                </form>
            </div>
        );
    }
}