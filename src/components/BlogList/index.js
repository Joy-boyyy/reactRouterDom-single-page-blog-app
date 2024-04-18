// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItemComponent from '../BlogItem'
import './index.css'

class BlogListComponent extends Component {
  state = {myArr: [], isTrue: true}

  componentDidMount() {
    this.madeServerCall()
  }

  madeServerCall = async () => {
    try {
      const fetchedData = await fetch('https://apis.ccbp.in/blogs')
      const jsonConverted = await fetchedData.json()

      const kayModification = jsonConverted.map(mapProp => ({
        id: mapProp.id,
        title: mapProp.title,
        imageUrl: mapProp.image_url,
        avatarUrl: mapProp.avatar_url,
        author: mapProp.author,
        topic: mapProp.topic,
      }))

      this.setState({myArr: kayModification, isTrue: false})
    } catch (error) {
      console.log('ew Got Error=> ', error.message)
    }
  }

  render() {
    const {myArr, isTrue} = this.state
    return (
      <div className="mainCardParentContainer">
        {isTrue ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          myArr.map(mapParameter => (
            <BlogItemComponent key={mapParameter.id} allData={mapParameter} />
          ))
        )}
      </div>
    )
  }
}

export default BlogListComponent
