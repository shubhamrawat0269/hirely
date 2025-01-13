import { Button, Label } from '@/components'
import { Navbar, AppliedJobTable } from '@/components/organisms'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Mail, Pen, Contact, Badge } from 'lucide-react'

const skills = [1, 2, 3, 4]

const Profile = () => {
  const isResume = true
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex justify-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1>Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident minima eaque quos! Numquam
                corrupti aspernatur quaerat consequuntur labore reprehenderit.
              </p>
            </div>
          </div>
          <Button className="text-right" variant={'underline'}>
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>rawatshubam269@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>988502529057</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1 5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a href="https://app.daily.dev/?ua=true" target="_blank" className="text-blue-600 hover:underline">
              Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1>Applied Jobs</h1>
        {/* Applied Job Table  */}
        <AppliedJobTable />
      </div>
    </div>
  )
}

export default Profile
