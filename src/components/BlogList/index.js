import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="all-blogs">
      {blogsList.map(eachBlog => (
        <BlogItem blogItem={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
