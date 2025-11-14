import { MoonIcon, PanelLeft, SearchIcon, SunIcon } from 'lucide-react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTheme} from '../features/themeSlice'

const Navbar = () => {

    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.theme);
    const photoURL = useSelector(state => state.user.photoURL)

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-6 xl:px-16 py-3 flex-shrink-0">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Left section */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Sidebar Trigger */}
                    <button className="sm:hidden p-2 rounded-lg transition-colors text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800" >
                        <PanelLeft size={20}/>
                    </button>

                    {/* search bar */}
                    <div className="relative flex-1 max-w-sm">
                        <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 size-3.5"/>
                        <input
                            type="text"
                            placeholder="Search projects, tasks..."
                            className="pl-8 pr-4 py-2 w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-md text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>

                </div>
            {/* Right section */}
                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}
                    <button onClick={() => dispatch(toggleTheme())} className="size-8 flex items-center justify-center bg-white dark:bg-zinc-800 shadow rounded-lg transition hover:scale-105 active:scale-95">
                        {
                            theme === "light"
                                ? (<MoonIcon className="size-4 text-gray-800 dark:text-gray-200" />)
                                : (<SunIcon className="size-4 text-yellow-400" />)
                        }
                    </button>

                    {/* User Button */}
                    {photoURL ?(<img src={photoURL}
                     alt="Avatar" className="w-10 h-10 rounded-full border-2" /> ):
                     <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
                      alt='profile' className="w-10 h-10 rounded-full border-2" />}
                  

                     

                </div>

        </div>
    </div>
  
  )
}

export default Navbar