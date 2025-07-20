import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative overflow-hidden rounded-xl border border-black-500">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-700 to-red-700 backdrop-blur-md" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-4 w-4 rounded-full bg-cyan-400/10 animate-float top-4 left-[10%] " />
          <div className="absolute h-3 w-3 rounded-full bg-cyan-400/10 animate-float top-8 left-[20%] [animation-delay:0.5s]" />
          <div className="absolute h-5 w-5 rounded-full bg-blue-400/10 animate-float top-6 left-[80%] [animation-delay:1s]" />
          <div className="absolute h-6 w-6 rounded-full bg-blue-400/10 animate-float top-2 left-[60%] [animation-delay:1.5s]" />
        </div>
        <div className="relative px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-black-400 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                <svg className="relative w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.755 9.755 0 016.116-3.985z" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">Sushil Kumar</span>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to="/home" className="relative group">
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100" />
              </Link>
              <Link to="/create" className="relative group">
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">CreatePage</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100" />
              </Link>
              <Link to="/edit" className="relative group">
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">EditPage</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100" />
              </Link>
              <Link to="/single" className="relative group">
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Blogs</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100" />
              </Link>
              <Link to="/learning" className="relative group">
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">LearningReact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden sm:flex relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-400 rounded-lg blur opacity-90 group-hover:opacity-100 transition duration-200" />
                <div className="relative px-5 sm:px-7 py-2 sm:py-3 bg-blue-400 rounded-lg leading-none flex items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200 group-hover:text-white transition duration-200">Get Started</span>
                    <svg className="w-5 h-5 text-blue-200 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden relative group" 
                aria-label="Toggle mobile menu"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded blur opacity-60 group-hover:opacity-100 transition duration-200" />
                <div className="relative p-2 bg-blue-950 rounded leading-none">
                  {!isOpen ? (
                    <svg className="w-6 h-6 text-blue-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-blue-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="relative mt-4 md:hidden animate-slide-down">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/50 backdrop-blur-sm rounded-lg border border-blue-500/10">
                <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/create" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Create</Link>
                <Link to="/edit" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Edit</Link>
                <Link to="/single" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Blogs Page</Link>
                <Link to="/learning" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Learning</Link>
                <div className="px-3 py-2">
                  <button className="w-full relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                    <div className="relative px-4 py-2 bg-blue-950 rounded-lg leading-none flex items-center justify-center">
                      <span className="text-blue-200 group-hover:text-white transition duration-200">Get Started</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar