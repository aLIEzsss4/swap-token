import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const SwapWidget = dynamic(
  async () => {
    const res = await import('@uniswap/widgets');
    return res.SwapWidget;
  },
  { ssr: false }
)
import '@uniswap/widgets/fonts.css'


const Home: NextPage = () => {


  const result = {
    defaultInputTokenAddress: '',
    defaultOutputTokenAddress: '0x4287aa7f9db5f42d85ddeec88c1599d0a8b94406',
    defaultInputAmount: 0.1
  }

  return (
    <div >
      <Head>
        <title>Token swap</title>
        <meta
          content="Token swap"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="relative h-screen">

        <div className="absolute top-5 right-5">
          <ConnectButton />
        </div>
        <div className="flex items-center justify-center h-full">

          <SwapWidget
            width={500}
            hideConnectionUI={true}
            defaultChainId={5}
            permit2={true}
            defaultInputTokenAddress={result?.defaultInputTokenAddress || 'NATIVE'}
            defaultOutputTokenAddress={result?.defaultOutputTokenAddress || 'NATIVE'}
            defaultInputAmount={result?.defaultInputAmount}
            brandedFooter={false} />
        </div>
      </div>
    </div>

  );
};

export default Home;


