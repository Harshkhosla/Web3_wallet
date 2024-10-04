export const WalletCreate =()=>{
    return(
        <div className="max-w-full">
            <div className="xl:w-11/12  w-full px-8 ">
                    <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
                        <div className="w-72 h-16 relative md:mt-0 mt-4">
                            <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" />
                            <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p className="w-full text-sm font-medium leading-4 text-white">Create Wallet</p>
                                <p className="w-full text-xs mt-1 leading-none text-white">Add your details in the input box.</p>
                            </div>
                        </div>

                        <div className="w-72 h-16 relative md:mt-0 mt-4">
                            <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" className="w-full h-full" />
                            <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p className="w-full text-sm font-medium leading-4 text-indigo-800">Save your secret recovery phrase</p>
                                <p className="w-full text-xs mt-1 leading-none text-indigo-800">Get your public and private key genrated.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="xl:w-10/12 w-full  px-8">

                <div className="sm:flex">

               <div className="">

             
                  <h1 className="text-2xl font-bold">
                  Personal Information
                    </h1>
                    <p className="text-lg font-semibold">
                    Information about the section could go here and a brief description of how this might be used.
                    </p>
            </div>

                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="password">Password</label>
                                        <input type="name"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="securityCode">Security Code</label>
                                        <input type="name"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="Enter your security code" />
                                    </div>
                     </div>
                               
                </div>
                </div>
        </div>
    )
}