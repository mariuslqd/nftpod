'use client';

import React, { useState, useEffect } from 'react';
import { getNfts, useNfts } from  "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import {useAccount} from "wagmi";
import Link from 'next/link';
import { useRouter } from 'next/router';


 
 
export default function NFTs() {
  const router = useRouter();
  const forceReload = () => {
  router.reload();
};
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);
  const [nfts, setNfts] = useState<Nft[]>([]);

  useEffect(() => {
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
    fetchNfts();
  }, [isConnected, walletAddress]); // run this effect when the isConnected value or the walletAddress value changes


  return (
    <div className='p-10 flex flex-col items-center'>
      {!address && <p>Please connect a wallet to view your NFTs.</p>}
      {address && <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={forceReload}><p>See NFTs Now</p>
      </button>}
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return (
            <Link href="print" as={`print/${nft.tokenId}`}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};