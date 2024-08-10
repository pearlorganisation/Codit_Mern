
const ProductListingCard = ({product}) => {
  return (
    <div className="relative">
   <div className="relative border p-2 rounded-md " style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <span className="bg-[#2DB224] text-white rounded-sm z-20 absolute top-0 left-0 px-3">
        Sale
      </span>
<a key={product.id} href={product.href} className="group">
    <div className="   overflow-hidden rounded-lg bg-gray-200 ">
      <img
        alt={product.imageAlt}
        src={product.imageSrc}
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    <p className="mt-1 text-lg font-medium text-blue-600">{product.price}</p>
  </a>
    </div>
     
    </div>
    
  )
}

export default ProductListingCard;