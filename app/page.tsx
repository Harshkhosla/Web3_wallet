"use client"
import { useState } from "react";
import { Header } from "./Components/Header";
import { WalletCreate } from "./Components/WalletCreate";

export default function Home() {

  const [show, setShow] = useState(false);
  const createWallet = () => {
    console.log("hello");
    setShow(true)

  }
  return (
    <div className="">
      <Header createWallet={createWallet} />
      {show == true ? <WalletCreate /> : "already have account"}
    </div>
  )
}
