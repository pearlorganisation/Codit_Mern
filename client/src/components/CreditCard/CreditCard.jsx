const CreditCard= ({ handleCredit }) => {


    return (
        <div className="fixed inset-0 top-20 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-md mx-auto p-8 rounded-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Add Card Details</h2>
                <div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="card"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Expiry Date 
                        </label>
                        <input
                            type="date"
                            id="card-expiry"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Card Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Card User
                        </label>
                        <input
                            type="text"
                            id="user"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    
                   
                    <div className='flex felx-row justify-between gap-1'>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Add Credit Card
                        </button>
                        <button
                            type="button"
                            onClick={handleCredit}
                            className="w-full bg-red-300 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-300"
                        >
                            Cancel
                        </button></div>

                </div>
            </div>
        </div>
    );
};

export default CreditCard;
