import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image, onSelect}) => {
    return (
        <li key={image.id} className={s.GalleryItem}>
            <img 
                src={image.webformatURL} 
                alt="gg" 
                className={s.GalleryItemImage} 
                onClick={() => onSelect(image.largeImageURL)}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }),
    onSelect: PropTypes.func.isRequired,
};