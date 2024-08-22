import React, { useState, useEffect } from 'react';

const ImageFromUrl = ({ imageUrl }) => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const convertImageToBase64 = async () => {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onload = () => {
                    setImageSrc(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error('Error converting image to base64:', error);
            }
        };

        convertImageToBase64();
    }, [imageUrl]);

    return <img src={imageSrc} alt="Converted Image" />;
};

export default ImageFromUrl;