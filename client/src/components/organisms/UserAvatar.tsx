import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const UserAvatar = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <div className="flex items-center gap-3 space-y-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Profile Name</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsume dolor sit mut.</p>
            </div>
          </div>
          <div className="flex flex-col text-gray-600">
            <div className="flex w-fit items-center gap-2 cursor-pointer">
              <User2 />
              <Button variant="link">View Profile</Button>
            </div>
            <div className="flex w-fit items-center gap-2 cursor-pointer">
              <LogOut />
              <Button variant="link">Logout</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default UserAvatar
