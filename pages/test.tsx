'use client';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Wallet from './wallet';
import WagmiProvider from "../providers/wagmi";
import NFTs from '.';
import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { getNfts, useNfts } from  "../providers/anker";
import Link from 'next/link';

export default function Nftshow() {
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);
  const [nfts, setNfts] = useState<Nft[]>([]);


  useEffect(() => {
      if (isConnected) {
        // get the NFTs from the wallet address and set them in the state
        setNfts(nfts)
      } else {
        // if the wallet is not connected, clear the NFTs from the state
        setNfts([]);
      }
  }, []); // run this effect when the isConnected value or the walletAddress value changes

  return (
<div >
  <ConnectButton 
    accountStatus={"address"}
    showBalance={false}
    chainStatus={"none"}
    />
        <div className='p-10 flex flex-col items-center'></div>
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
              <div key={`${nft.contractAddress}/${nft.tokenId}`}
                className='flex flex-col rounded border p-4'>
                <Link href="/choice" as={`/choice/${nft.contractAddress}/${nft.tokenId}`}>
                <img
                  className='w-[200px] h-[200px] rounded shadow'
                  src={nft.imageUrl}
                  alt={nft.name}
                />
                <span className='font-bold mt-8'>{nft.name}</span>
                <span>{nft.collectionName}</span>
                </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
};
