import { useState } from "react"

const Header = () => {
    const [state, setState] = useState(false)
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Blogs", path: "/blogs" },
        { title: "About Us", path: "/about_us" },
     
    ];

  return (<>
    <nav className="bg-white w-full border-b  md:static">
          <div className="items-center px-2 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-1 md:py-1 md:block">
                    <a href="/">
                        <img
                            src="logo.svg" 
                            width={80} 
                            height={50}
                            alt="logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>

              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx}  className=" uppercase border-b-2 border-b-transparent hover:border-b-pink-700 text-md font-semibold hover:text-pink-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              
  
              <div className="md:flex gap-4 hidden">
                <img src="search.svg"/>
                <img src="cart.svg"/>
                <img src="wishlist.svg"/>
                <img src="user.svg"/>
              </div>
          </div>
      </nav>
                      
  </>
  
  )
}

export default Header