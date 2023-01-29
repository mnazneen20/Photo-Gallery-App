import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';

export default function Imagemodal(props) {
  const alltags = props.img.tags;
  const tags = alltags.split(', ')
  return (
    <div className='imgmodal'>
      <div className="modalelements">
        <button className='closebtn' onClick={props.closemodal}>X</button>
        <div className="details">
          <div className="imgzoom">
            <img src={props.img.webformatURL} alt={props.img.tags} />
          </div>
          <div className="imgdetails">
            <p>Photo by <span className="user">{props.img.user}</span></p>
            <div className="interactions">
              <span className="tooltip"><span className="tooltiptext">Likes</span><FavoriteIcon /><br />{props.img.likes}</span>
              <span className="tooltip"><span className="tooltiptext">Comments</span><CommentIcon /><br />{props.img.comments}</span>
              <span className="tooltip"><span className="tooltiptext">Views</span><VisibilityIcon /><br />{props.img.views}</span>
              <span className="tooltip"><span className="tooltiptext">Downloads</span><GetAppIcon /><br />{props.img.downloads}</span>
            </div>
            <section className='tag'>tags:</section>
            <div className="tagcontainer">
              {tags.map((t) => <p className='tagnames' key={t}>{t}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
