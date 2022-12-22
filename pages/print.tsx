import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import the useRouter hook
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { getNfts, useNfts } from  "../providers/anker";
import {useAccount} from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Choices() {
const router = useRouter(); // get the current route
const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
const [walletAddress, setWalletAddress] = useState(`${address}`);
const [nfts, setNfts] = useState<Nft[]>([]);

useEffect(() => {
  const fetchNfts = async () => {
      // get the NFTs from the wallet address and set them in the state
      const { nfts } = await getNfts(walletAddress);
      setNfts(nfts);
    } 
  fetchNfts();
}, [isConnected, walletAddress]); // run this effect when the isConnected value or the walletAddress value changes


return (
        <div>
  <ConnectButton 
    accountStatus={"address"}
    showBalance={false}
    chainStatus={"none"}
    />
          {/* <div className='grid grid-cols-4 mt-8 gap-4'>
            {nfts.map((nft) => {
              return (
                <div key={`${nft.contractAddress}/${nft.tokenId}`} className='flex flex-col rounded border p-4'>
                  <Link href="/print" as={`/print/${nft.tokenId}`}>
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
            })} */}



          <div>
            <Link href="/choice/mug" as="/choice?mug">
              <img src="/blank-300x300.png" title="mug" />
              <p>Mug</p>
            </Link>
            <Link href="/choice/canvas" as="/choice?canvas">
          <img src="/blank-300x300.png" title="canvas" />
          <p>Canvas</p>
        </Link>
        <Link href="/choice/t-shirt" as="/choice?t-shirt">
          <img src="/blank-300x300.png" title="t-shirt" />
          <p>T-shirt</p>
        </Link>
        <Link href="/choice/tradingcard" as="/choice?tradingcard">
          <img src="/blank-300x300.png" title="tradingcard" />
          <p>Trading card</p>
        </Link>
      </div>
    </div>
  );
};