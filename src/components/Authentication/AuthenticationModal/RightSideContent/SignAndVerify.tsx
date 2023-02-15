import React from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';

type SignAndVerifyProps = {
  contentType: number;
};

const SignAndVerify = ({ contentType }: SignAndVerifyProps) => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();

  const onVerifyHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    try {
      const nonceRes = await fetch('/api/nonce');
      const nonce = await nonceRes.text();
      const chainId = chain?.id;
      if (!address || !chainId) return;

      // Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // Verify signature
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
      });

      if (!verifyRes.ok) throw new Error('Error verifying message');
    } catch (error: unknown) {
      console.log('ERROR: SignAndVerify', error);
    }
  };
  return (
    isConnected &&
    !!address &&
    contentType === 3 && (
      <button
        onClick={onVerifyHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-5 flex w-4/5 flex-row flex-col items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
      >
        <span>Verify Ownership of</span>
        <span className="inline-flex flex-row">{address}</span>
      </button>
    )
  );
};

export default SignAndVerify;
