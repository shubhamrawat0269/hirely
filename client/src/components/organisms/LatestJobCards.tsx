import { Badge } from '../ui/badge'

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consectetur quisquam nihil culpa, ab
          molestiae.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-orange-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
