"use client"
const WalletsSelect = () => {
    const data = [
        {
            id:"1",
            walletName:"Bitcoin"
        },
        {
            id:"60",
            walletName:"Ethereum"
        },
        {
            id:"501",
            walletName:"solana"
        }
    ]
  return (
    <div className="flex justify-center space-x-6">
       {data.map((arr,index)=>{
                return(
                    <div key={index}>
                        <button className="px-4 py-2 border rounded-xl ">
                            {arr.walletName}
                        </button>
                    </div>
                )
            })}
    </div>
  )
}

export default WalletsSelect
