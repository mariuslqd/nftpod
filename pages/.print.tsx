'use client';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Wallet from './wallet';
import WagmiProvider from "../providers/wagmi";
import NFTs from './nfts';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getNfts, useNfts } from  "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { getJsonWalletAddress } from 'ethers/lib/utils.js';
import {useAccount} from "wagmi";


  
export default function Print() {
    const router = useRouter();
  const { tokenId } = router.query;
  const [nfts, setNfts] = useState<Nft | null>(null);
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);

console.log(tokenId);
useEffect(() => {
    const fetchNft = async () => {
      async function getNfts(walletAddress: string, tokenId: string): Promise<Nft> {
        const response = await fetch(`/api/nfts?walletAddress=${walletAddress}&tokenId=${tokenId}`);
        const nft = await response.json();
        return nft;
      }
      setNfts(nfts);
    };
    fetchNft();
  }, [address, tokenId]);

  return (
    <div>
          <ConnectButton 
    accountStatus={"address"}
    showBalance={false}
    chainStatus={"none"}
    />
      {nfts ? (
        <>
          <img src={nfts.imageUrl} alt={nfts.name} />
          <h1>{nfts.name}</h1>
          <p>Collection: {nfts.collectionName}</p>
        </>
      ) : (
        <p>Loading NFT...</p>
      )}
    </div>
  );
}