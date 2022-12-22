'use client';

import React, { useState, useEffect } from 'react';
import { getNfts, useNfts } from  "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import {useAccount} from "wagmi";

 
export default function NFTs() {
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);
  const [nfts, setNfts] = useState<Nft[]>([]);

  const fetchNfts = async () => {
    if (isConnected) {
      // get the NFTs from the wallet address and set them in the state
      const { nfts } = await getNfts(walletAddress);
      setNfts(nfts);
    } else if (!isConnected) {
      // if the wallet is not connected, clear the NFTs from the state
      setNfts([]);
    }
  };

  useEffect(() => {
    fetchNfts();
  }, [isConnected, walletAddress]); // run this effect when the isConnected value or the walletAddress value changes

  
  return (
    <div className='p-10 flex flex-col items-center'>
      {!address && <p>Please connect a wallet to view your NFTs.</p>}
      {address &&<button onClick={fetchNfts}>Refresh NFTs</button>}
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
            <div
              key={`${nft.contractAddress}/${nft.tokenId}`}
              className='flex flex-col rounded border p-4'>
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
 