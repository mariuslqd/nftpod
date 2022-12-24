'use client';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Wallet from './wallet';
import WagmiProvider from "../providers/wagmi";
import NFTs from './nfts';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";


export default function Home() {

const { address } = useAccount();

  return (
<div>
<NFTs />
</div>
)
}