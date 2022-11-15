import { useState, forwardRef } from "react";
import images from "~/assets/images";
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(images.noAvatar)
    }
    return <img onError={handleError} ref={ref} src={fallBack || src} alt={alt} {...props} />
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Image;