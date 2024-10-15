import React from 'react';

const CollectionCard = ({ data }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-6 shadow-md">
            {data.map((el, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col gap-3 justify-between items-center p-5 rounded-md min-h-[350px]"
                        style={{
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                    >
                        <img src={el.imagePath} alt="img" className="w-full h-full object-cover" />
                        <h1 className="font-semibold text-md">{el.name}</h1>
                        <h1 className="font-semibold text-md">${el.price}</h1>
                        <button className="text-white bg-pink-700 w-full rounded-md h-10">
                            Add To Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default CollectionCard;
