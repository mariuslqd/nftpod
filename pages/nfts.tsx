'use client';

import React, { useState, useEffect } from 'react';
import { getNfts, useNfts } from  "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import {useAccount} from "wagmi";
import {useIsMounted} from "./hooks/useIsMounted"

 
export default function NFTs() {
  const mounted = useIsMounted(); // use the useIsMounted hook to check if the component is mounted
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);
  const [nfts, setNfts] = useState<Nft[]>([]);
  const [isHydrated, setIsHydrated] = useState(false); // new flag to track hydration

  useEffect(() => {
    // only run this effect if the component is hydrated and the wallet is connected
    if (isHydrated && isConnected) {
      // get the NFTs from the wallet address and set them in the state
      getNfts(walletAddress).then((response) => {
        setNfts(response.nfts);
      });
    } else if (isHydrated && !isConnected) {
      // if the wallet is not connected, clear the NFTs from the state
      setNfts([]);
    }
  }, [isConnected, isHydrated, walletAddress]); // run this effect when the isConnected value or the isHydrated value changes
  
  // set the isHydrated flag to true after the initial render
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  
  return (
    <div className='p-10 flex flex-col items-center'>
      {!address && <p>Please connect a wallet to view your NFTs.</p>}
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
            <div
              key={`${nft.contractAddress}/${nft.tokenId}`}
              className='flex flex-col rounded border p-4'
            >
              <img
                className='w-[200px] h-[200px] rounded shadow'
                src={nft.imageUrl}
                alt={nft.name}
              />
              <span className='font-bold mt-8'>{nft.name}</span>
              <span>{nft.collectionName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 