import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

const WalletsPage = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  const onDisconnectHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    await disconnect();
  };

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar as string | undefined} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        {connector?.name && <div>Connected to {connector!.name}</div>}
        <button
          style={{ border: '1px solid black', margin: 20, padding: 10 }}
          onClick={onDisconnectHandler}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 100 }}>
      {connectors.map((each) => (
        <button
          style={{ border: '1px solid black', margin: 20, padding: 10 }}
          onClick={() => connect({ connector: each })}
          // disabled={!each.ready}
          key={each.id}
        >
          {each.name}
          {isLoading && each.id === pendingConnector?.id && ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default WalletsPage;
