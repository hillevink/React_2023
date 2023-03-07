import {Link, useParams} from "react-router-dom";

const Resources = ({resources}) => {

  const {slug} = useParams()
  const category = resources.filter((resource) => resource.category === slug)
  console.log(category)

  return (
    <>
      {category.map((cat) => (
        <>
          <h2><Link to={cat.url}>{cat.title}</Link></h2>
        </>
      ))}
    </>
  )
}

export default Resources;