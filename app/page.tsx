"use client"
import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { WalletCreate } from "./Components/WalletCreate";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import  WalletsSelect from "./Components/WalletsSelect"

export default function Home() {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    setShow1(key);
    console.log(key);
  }, [key])

  const createWallet = () => {
    // console.log("hello");
    setShow(true)
  }


  const savekey=()=>{
    setShow1("")
    setShow2(true)
    
  }

  return (
    <div className="">
      <Header createWallet={createWallet} />
      {show == true ? <WalletCreate setKey={setKey} setShow={setShow} /> : ""}
      
      {show1 !== "" ?
        <>
          <div className=" text-xl font-bold ">
            Remember them
          </div>
          <div className=" flex justify-center">
            <div className="grid grid-cols-4 gap-4 w-1/2">
              {key.split(" ").map((arr, index) => {
                return (
                  <div className="flex flex-wrap py-3 px-6 mx-2 my-4 border rounded-xl bg-blue-500">
                    {arr}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="py-4 px-4  justify-center">
            <button  onClick={savekey} className="rounded-md  w-40 flex space-x-2  h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">Next</button>
          </div>
        </>
        :
        ""}
      <WalletsSelect/>
    </div>
  )
}
