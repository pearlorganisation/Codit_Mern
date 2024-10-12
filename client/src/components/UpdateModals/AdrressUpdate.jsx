const AddressUpdate = ({ handleAddress }) => {


    return (
        <div className="fixed inset-0 top-20 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-md mx-auto p-8 rounded-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"

                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Sec-Email
                        </label>
                        <input
                            type="text"
                            id="sec-email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="mobileNumber"

                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className='flex felx-row justify-between gap-1'>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={handleAddress}
                            className="w-full bg-red-300 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-300"
                        >
                            Cancel
                        </button></div>

                </div>
            </div>
        </div>
    );
};

export default AddressUpdate;
