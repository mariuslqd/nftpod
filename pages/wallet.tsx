'use client';

import React, { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
   
export default function Wallet() {
    const { address, connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()
   
    if (isConnected) {
      return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => disconnect()}>{address}
            </button>
        </div>
      )
    }
   
    return (
      <div>
        {connectors.map((connector) => (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            Connect Wallet
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}
      </div>
    )
}