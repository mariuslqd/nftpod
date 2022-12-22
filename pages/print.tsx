'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getNfts, useNfts } from  "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import {useAccount} from "wagmi";

export default function Print() {
  const router = useRouter();
  const { tokenId } = router.query;
  const [nfts, setNfts] = useState<Nft | null>(null);
  const { address, isConnected } = useAccount(); // get the current wallet address from Wagmi
  const [walletAddress, setWalletAddress] = useState(`${address}`);

  useEffect(() => {
    const fetchNft = async () => {
      const nft = await getNfts(walletAddress);
      setNfts(nfts);
    };
    fetchNft();
  }, [tokenId]);

  return (
    <div>
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