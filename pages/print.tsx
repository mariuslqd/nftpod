import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // import the useRouter hook



export default function Choices() {
const router = useRouter(); // get the current route

return (
    <div>
    <Link href="/choice/" as={`/choice?mug`}>
    <img src="/blank-300x300.png" title ="mug" />
        <p>Mug</p>
    </Link>
      <Link href="/choice/" as={`/choice?canvas`}>
          <img src="/blank-300x300.png" title ="canvas" />
          <p>Canvas</p>
      </Link>
      <Link href="/choice" as={`/choice?t-shirt`}>
          <img src="/blank-300x300.png" title ="t-shirt" />
          <p>T-shirt</p>
      </Link>
      <Link href="/choice" as={`/choice?tradingcard`}>
          <img src="/blank-300x300.png" title ="tradingcard" />
          <p>Trading card</p>
      </Link>
    </div>
  );
};