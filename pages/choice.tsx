import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import the useRouter hook
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Choosen() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
      const [url, setUrl] = useState('');
    const router = useRouter();
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    
    //     // send an email to "mariussmithofficial@gmail.com" with the form data
    //     // you can use an email library or API to do this
    //     sendEmail(
    //       'mariussmithofficial@gmail.com',
    //       'New form submission',
    //       `Name: ${name}\nAddress: ${address}\nItem: ${item}\nURL: ${url}`
    //     );
    //   };
    //   console.log(`${url}`)

      return (
    <div>
      <ConnectButton 
        accountStatus={"address"}
        showBalance={false}
        chainStatus={"none"}
        />
        {/* <div className='p-10 flex flex-col items-center'>
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <br />
      <label>
        Item:
        <select value={item} onChange={(event) => setItem(event.target.value)}>
          <option value="mug">Mug</option>
          <option value="trading card">Trading card</option>
        </select>
      </label>
      <br />
      <label>
        URL:
        <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
      </label>
      <br />
      <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <input  type="submit" value="Submit" />
      </button>
    </form>
        </div> */}
    </div>
    )
    }