import { Component } from "react";
import s from './Modal.module.css';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };
    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };


    render() {
        const {image} = this.props;
        return (
            <div className={s.Overlay} onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                   <img src={image} alt="gg" />
                </div>
            </div>
        );
    }
}