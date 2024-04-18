// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItemComponent = props => {
  const {allData} = props
  const {id, topic, author, avatarUrl, imageUrl, title} = allData

  return (
    <Link to={`/blogs/${id}`} className="linkComponentCl">
      <div className="mainCard">
        <div>
          <img className="cardMainImg" src={imageUrl} alt={topic} />
        </div>
        <div className="cardDetails">
          <p>{topic}</p>
          <h1>{title}</h1>
          <p>
            <img className="avatarLogoImg" src={avatarUrl} alt={author} />
            {author}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItemComponent
