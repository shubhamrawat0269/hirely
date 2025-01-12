import { Navbar, Footer, Job } from '@/components/organisms'

const randomJobs = [1, 2, 3, 4, 5, 6, 7]

const BrowseJobs = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-lg">Search Results ({randomJobs.length})</h1>

        <div className="grid grid-cols-3 gap-4 my-5">
          {randomJobs.map((job, index) => {
            return <Job key={index} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BrowseJobs
