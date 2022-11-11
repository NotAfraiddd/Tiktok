import { useState, forwardRef } from "react";
import images from "~/assets/images";

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(images.noAvatar)
    }
    return <img onError={handleError} ref={ref} src={fallBack || src} alt={alt} {...props} />
})

export default Image;