
const ProductCard = ({data}) => {
  return (
    
        <div className="bg-gray-100 ">
          <div className=" bg-white rounded-lg shadow-lg overflow-hidden p-2 ">
            <div className="relative">
              <img
                src={data?.img}
                alt="Product Image"
                className="w-full h-full object-cover"
              />

              <span className="p-[0.1rem] md:p-[0.2rem] bg-black text-white poppins-semibold rounded-md absolute top-0 left-2">
                SUMMER SALE 
              </span>

              <span className="absolute top-1 right-2 text-pink-500  hover:cursor-pointer">
              <svg width="30"  height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 25L14.292 25.708C14.3849 25.8011 14.4952 25.875 14.6167 25.9254C14.7382 25.9758 14.8685 26.0018 15 26.0018C15.1315 26.0018 15.2618 25.9758 15.3833 25.9254C15.5048 25.875 15.6151 25.8011 15.708 25.708L15 25ZM15 5L14.292 5.708C14.3849 5.80113 14.4952 5.87501 14.6167 5.92543C14.7382 5.97584 14.8685 6.00179 15 6.00179C15.1315 6.00179 15.2618 5.97584 15.3833 5.92543C15.5048 5.87501 15.6151 5.80113 15.708 5.708L15 5ZM15.708 24.292L3.778 12.364L2.364 13.778L14.292 25.708L15.708 24.292ZM26.222 12.364L14.292 24.292L15.708 25.708L27.636 13.778L26.222 12.364ZM12.364 3.778L14.292 5.708L15.708 4.292L13.778 2.364L12.364 3.778ZM15.708 5.708L17.636 3.778L16.222 2.364L14.292 4.292L15.708 5.708ZM21.928 0C19.788 0 17.736 0.85 16.222 2.364L17.636 3.778C18.7745 2.64001 20.3183 2.00051 21.928 2V0ZM28 8.072C28 9.682 27.36 11.226 26.22 12.364L27.636 13.778C29.1493 12.2646 29.9996 10.2122 30 8.072H28ZM30 8.072C30 5.93117 29.1496 3.87803 27.6358 2.36423C26.122 0.85044 24.0688 0 21.928 0V2C23.5384 2 25.0828 2.63973 26.2216 3.77845C27.3603 4.91717 28 6.46161 28 8.072H30ZM8.072 2C9.682 2 11.226 2.64 12.364 3.78L13.778 2.364C12.2646 0.850725 10.2122 0.000406192 8.072 0V2ZM2 8.072C2 6.46161 2.63973 4.91717 3.77845 3.77845C4.91717 2.63973 6.46161 2 8.072 2V0C5.93117 0 3.87803 0.85044 2.36423 2.36423C0.85044 3.87803 0 5.93117 0 8.072H2ZM3.778 12.364C3.21398 11.8005 2.76848 11.1315 2.46307 10.3951C2.15765 9.65863 2.0003 8.86925 2 8.072H0C0 10.212 0.85 12.264 2.364 13.778L3.778 12.364Z" fill="#FF009C"/>
              </svg>

              </span>
            </div>

            <div className="p-4">
              <h3 className="text-xl md:text-2xl text-center mb-2 gupter-medium poppins-semibold text-[#484848]">{data?.title}</h3>
              <p className="text-gray-600 text-center">Starting From ₹ 250</p>

              <div className="flex items-center justify-center space-x-2 my-2">
                <span className="w-4 h-4 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-purple-500 inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
              </div>

             
            </div>
          </div>
        </div>
  )
}

export default ProductCard