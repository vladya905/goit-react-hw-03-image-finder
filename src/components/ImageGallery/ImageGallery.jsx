import React from 'react';
import PropTypes from 'prop-types';
import  { ImageGalleryItem }  from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, onSelect }) => {
    return (
        <ul className={s.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem 
                    key={image.id.toString()} 
                    image={image} 
                    onSelect={onSelect} 
                />
            ))}
        </ul>
    );
}
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};