import { useSigninFormStore } from '@/store/auth.store'
import { HireLogo, MenuItem, AuthButtons, UserAvatar } from '@/components/organisms'

const Navbar = () => {
  const { userData } = useSigninFormStore()

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <HireLogo />
        <div className="flex items-center gap-5">
          <MenuItem />
          {!userData ? <AuthButtons /> : <UserAvatar />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
