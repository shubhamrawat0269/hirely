import { Search } from 'lucide-react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunting Platform
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus recusandae adipisci eius! Praesentium enim,
          similique facere debitis officia voluptate provident doloremque. Vero a iste laudantium.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input type="text" className="outline-none border-none w-full" placeholder="Find your dream jobs" />
          <Button className="rounted-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
