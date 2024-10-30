"use client"
import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { WalletCreate } from "./Components/WalletCreate";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import WalletsSelect from "./Components/WalletsSelect"
import { ConnectionProvider, useConnection, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { AirDrop } from "./Components/AirDrop";
import { log } from "console";




export default function Home() {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState(0);
  const [key, setKey] = useState("");

  useEffect(() => {
    setShow1(key);
    console.log(key);
  }, [key])



  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/cZ3QMulagNtVTgeQhjSJm0vXLgyq2_Ue"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex justify-between">
          <WalletMultiButton/>
          <WalletDisconnectButton/>
          </div>
          <AirDrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
