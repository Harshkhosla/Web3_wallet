"use Client"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function AirDrop() {

    const [amount, setAmount] = useState(1)
    const [amoun1t, setAmount1] = useState(1)
    const [balances, setbalances] = useState(1)
    const wallet = useWallet()

    const { connection } = useConnection();

    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            setbalances(balance)
            console.log(balance);

        }
    }

    getBalance()
    const RequestAirDrop = async () => {
        if (wallet.publicKey) {
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL)
        }
    }
    console.log(wallet.publicKey, "sample");


    const sample = (e: any) => {
        setAmount(e.target.value)
    }

    const sample1 = (e: any) => {
        setAmount1(e.target.value)
    }


    const SendSol = async () => {
        const transction = new Transaction()
        if (wallet.publicKey !== null) {
            transction.add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new PublicKey(amoun1t),
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            )
        }
        await wallet.sendTransaction(transction, connection)
    }

    return <div className="">
        <div className="">

            Total sol till now :-  {balances / LAMPORTS_PER_SOL}
        </div>
        <div>
            <h1>for the air drop </h1>

            <input className="border-4" placeholder="Amount" onChange={sample}></input>
            <button onClick={RequestAirDrop}  className="border  ml-5 px-4 py-2 rounded-lg bg-orange-300"  >submit</button>
        </div>
        <div>
            <h1>For sending the amount to differnt public key  </h1>
            <input className="border-4" placeholder="Amount" onChange={sample}></input>
            <input className="border-4" placeholder="Publick key " onChange={sample1}></input>
            <button onClick={SendSol}  className="border  ml-5 px-4 py-2 rounded-lg bg-orange-300" >submit</button>
        </div>

    </div>
}