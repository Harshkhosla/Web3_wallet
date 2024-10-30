'use client'
import { ed25519 } from "@noble/curves/ed25519";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useCallback, useState } from "react";
import bs58 from "bs58";
import Fields from "./input/Fields";
import { createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export  function AirDrop() {
    const [amount, setAmount] = useState(0);
    const [amount2, setAmount2] = useState();
    const [amount3, setAmount3] = useState({
        name:"",
        discription:"",
        url:"",
        data:""
    });
    const [amoun1t, setAmount1] = useState(1);
    const [balances, setbalances] = useState(1);
    const [activeTab, setActiveTab] = useState("airdrop"); // State to manage the active tab
    const wallet = useWallet();
    const { connection } = useConnection();


    const datamint=async()=>{
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();
    
        const transaction = new Transaction();
        if (wallet.publicKey !== null) {
            transaction.add(
               
                SystemProgram.createAccount({
                    fromPubkey: wallet.publicKey,
                    newAccountPubkey: keypair.publicKey,
                    space: MINT_SIZE,
                    lamports,
                    programId:TOKEN_PROGRAM_ID,
                }),
                createInitializeMint2Instruction(keypair.publicKey, 6, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID)
            );
    
            const resentBlockhash = await   connection.getLatestBlockhash();
            transaction.recentBlockhash = resentBlockhash.blockhash
            transaction.feePayer = wallet.publicKey;
    
            transaction.partialSign(keypair);
            wallet.sendTransaction(transaction,connection)
        }
    
    }

  

    
// createMint
    async function getBalance() {
        if (wallet.publicKey) {
            const balance = await connection?.getBalance(wallet?.publicKey);
            setbalances(balance);
        }
    }


    getBalance();

    const RequestAirDrop = async () => {
        if (wallet.publicKey) {
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        }
    };

    const sample = useCallback((e:any) => {
        setAmount(e.target.value);
    }, []);

    const sample1 = (e:any) => {
        setAmount1(e.target.value);
    };

    const sample2 = useCallback((e:any) => {
        const {name,value} =e.target;
        setAmount3(pre=>({
            ...pre ,[name]: value}));
    }, []);
console.log(amount3,"sdkvjsdvn");

    const SendSol = async () => {
        const transaction = new Transaction();
        if (wallet.publicKey !== null) {
            transaction.add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new PublicKey(amoun1t),
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );
        }
        await wallet.sendTransaction(transaction, connection);
    };

    const { publicKey, signMessage } = useWallet();

    const onClick = async () => {
        if (!publicKey) {
            alert("Wallet not connected!");
            return;
        }
        if (!signMessage) {
            alert("Wallet does not support message signing!");
            return;
        }

        const encodedMessage = new TextEncoder().encode(amount2);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            alert("Message signature invalid!");
            return;
        }
        alert(`Message signature: ${bs58.encode(signature)}`);
    };

    // Function to render content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case "airdrop":
                return (
                    <div>
                        <h1>For The Air Drop</h1>
                        <Fields text="text" label="Amount" onChange={sample} />
                        <button onClick={RequestAirDrop} className="border ml-5 px-4 py-2 rounded-lg bg-orange-300">
                            Submit
                        </button>
                    </div>
                );
            case "sending":
                return (
                    <div>
                        <h1>For Sending the Amount to a Different Public Key</h1>
                        <Fields text="text" label="Amount" onChange={sample} />
                        <input className="border-4" placeholder="Public Key" onChange={sample1}></input>
                        <button onClick={SendSol} className="border ml-5 px-4 py-2 rounded-lg bg-orange-300">
                            Submit
                        </button>
                    </div>
                );
            case "signing":
                return (
                    <div>
                        <h1>For Sending the Signed Message</h1>
                        <input className="border-4" placeholder="Amount" onChange={sample2}></input>
                        <button onClick={onClick} className="border ml-5 px-4 py-2 rounded-lg bg-orange-300">
                            Sign Message
                        </button>
                    </div>
                );
            case "tokenLaunchpad":
                return (
                    <div>
                        <h1>For Creating a Token Launchpad</h1>
                        <div className="space-x-4">

                        <input className="border-4" placeholder="name" name="name" onChange={sample2}></input>
                        <input className="border-4" placeholder="discription"  name="discription" onChange={sample2}></input>
                        <input className="border-4" placeholder="data"  name="data" onChange={sample2}></input>
                        <input className="border-4" placeholder="url"  name="url" onChange={sample2}></input>
                        </div>
                        <div className="mt-5">
                            
                        <button onClick={datamint} className="border ml-5 px-4 py-2 rounded-lg bg-orange-300">
                            Mint Token
                        </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div className="text-2xl font-bold text-center">
                Total Solana: {balances / LAMPORTS_PER_SOL}
            </div>

            <div className="bg-gray-200 w-full">
                <div className="container px-6 py-6 sm:py-0 mx-auto">
                    <ul className="flex flex-row pt-8">
                        <button
                            onClick={() => setActiveTab("airdrop")}
                            className={`rounded-t w-32 h-12 flex items-center justify-center ${
                                activeTab === "airdrop" ? "bg-white" : "bg-gray-300"
                            } text-sm text-gray-800`}
                        >
                            AirDrop
                        </button>
                        <button
                            onClick={() => setActiveTab("sending")}
                            className={`rounded-t w-32 h-12 flex items-center justify-center ${
                                activeTab === "sending" ? "bg-white" : "bg-gray-300"
                            } mx-1 text-sm text-gray-800`}
                        >
                            Sending
                        </button>
                        <button
                            onClick={() => setActiveTab("signing")}
                            className={`rounded-t w-32 h-12 flex items-center justify-center ${
                                activeTab === "signing" ? "bg-white" : "bg-gray-300"
                            } mr-1 text-sm text-gray-800`}
                        >
                            Signing
                        </button>
                        <button
                            onClick={() => setActiveTab("tokenLaunchpad")}
                            className={`rounded-t w-32 h-12 flex items-center justify-center ${
                                activeTab === "tokenLaunchpad" ? "bg-white" : "bg-gray-300"
                            } mr-1 text-sm text-gray-800`}
                        >
                            Token Launch Pad
                        </button>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-10 h-64">
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    <div className="pl-10 pt-10">{renderTabContent()}</div>
                </div>
            </div>
        </div>
    );
}
