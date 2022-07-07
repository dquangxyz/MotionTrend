import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { AppContext } from '../App';


function MenuItem({title, image, avatar, year}) {
  const {setModalOpen, setModalTitle, setModalAvatar, setModalImage, setModalYear} = useContext(AppContext)
  function handleOpen() {
    setModalOpen(true)
    setModalTitle(title)
    setModalAvatar(avatar)
    setModalImage(image)
    setModalYear(year)
  }
  return (
    <Card className='menu-item' onClick={handleOpen}>         
      <Card.Img className='menu-item-img' src={image}/>
      <Card.Title className='menu-item-title'>{title}</Card.Title>  
    </Card>

  )
}

export default MenuItem