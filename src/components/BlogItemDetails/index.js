// Write your JS code here
import './index.css'

import {Component} from 'react'

class BlogItemDetailsComponent extends Component {
  state = {arrayFullData: {}}

  componentDidMount() {
    this.makingServerCallBasedOnId()
  }

  makingServerCallBasedOnId = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      console.log(this.props)
      const fetchedDataServerr = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const jsonConvertedDataa = await fetchedDataServerr.json()

      console.log(jsonConvertedDataa)

      const arrayKeyModificationData = {
        author: jsonConvertedDataa.author,
        avatarUrl: jsonConvertedDataa.avatar_url,
        content: jsonConvertedDataa.content,
        id: jsonConvertedDataa.id,
        imageUrl: jsonConvertedDataa.image_url,
        title: jsonConvertedDataa.title,
        topic: jsonConvertedDataa.topic,
      }

      console.log(arrayKeyModificationData)

      this.setState({arrayFullData: arrayKeyModificationData})
    } catch (error) {
      console.log('yourError Occured:=>', error.message)
    }
  }

  render() {
    const {arrayFullData} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = arrayFullData
    return (
      <div className="aminBLog">
        <h1>{title}</h1>
        <p>
          <img className="avatarLo" src={avatarUrl} alt={author} /> {author}
        </p>
        <div>
          <img className="blogImg" src={imageUrl} alt={topic} />
        </div>
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetailsComponent
