import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import the useRouter hook
import NFTs from './nfts';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";

export default function choosen() {

    const router = useRouter();
    
      return (
    <div>
      <ConnectButton 
        accountStatus={"address"}
        showBalance={false}
        chainStatus={"none"}
        />
        <div className='p-10 flex flex-col items-center'>
        <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
        </button>
        </div>
    </div>
    )
    }