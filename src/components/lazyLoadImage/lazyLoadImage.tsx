import React, { useState, useEffect } from 'react'
import { PostImageProps } from '@interfaces/PropTypes'

const LazyLoadImage: React.FC<PostImageProps> = ({ picture,className }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentImage, setCurrentImage] = useState<string>('/samplepost.jpg') // replace this with your placeholder image path

  useEffect(() => {
    const img = new Image()

    img.src = picture
    img.onload = () => {
      setCurrentImage(picture)
      setLoading(false)
    }
  }, [picture])

  return (
    <div
      className={`transition-opacity duration-500 m-0 ${
        loading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <img className={className} src={currentImage} alt="" />
    </div>
  )
}

export default LazyLoadImage
