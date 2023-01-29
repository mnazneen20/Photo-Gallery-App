import React from 'react'
import Imagemodal from './Imagemodal'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

export default function Image(props) {
    const [modalopen, setmodalopen] = React.useState(false)
  return (
    <div className='card'>
        <div className="overlay">
          <ZoomOutMapIcon onClick={() => setmodalopen(true)} className='zoombtn' />
        </div>
        <img src={props.img.webformatURL} alt={props.img.tags} />
        <div className="description">
          <span>Photo by {props.img.user}</span><span> ♡ {props.img.likes}</span>
        </div>
        {modalopen && <Imagemodal closemodal={() => setmodalopen(false)} img={props.img} />}
    </div>
  )
}