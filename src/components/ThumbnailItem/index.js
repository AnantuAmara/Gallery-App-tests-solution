// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onChangeImage, isActive} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = imagesList
  const newClass = isActive ? 'active-image' : ''
  const onClickImage = () => {
    onChangeImage(imageUrl, imageAltText)
  }
  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`img ${newClass}`}
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
