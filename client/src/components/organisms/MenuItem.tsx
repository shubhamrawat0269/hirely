import { Link } from 'react-router-dom'

const MenuItem = () => {
  return (
    <ul className="flex font-medium items-center gap-5">
      <li>
        <Link to={`/`}> Home</Link>
      </li>
      <li>
        <Link to={`/jobs`}>Jobs</Link>
      </li>
      <li>
        <Link to={`/browse`}>Browse</Link>
      </li>
    </ul>
  )
}

export default MenuItem
