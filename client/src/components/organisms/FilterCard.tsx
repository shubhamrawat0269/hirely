import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
  {
    filterType: 'Location',
    list: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune'],
  },
  {
    filterType: 'Industry',
    list: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune'],
  },
  {
    filterType: 'Salary',
    list: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune'],
  },
]

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup>
        {filterData.map((data, index) => {
          return (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.list.map((item, index) => {
                return (
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} />
                    <Label>{item}</Label>
                  </div>
                )
              })}
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
