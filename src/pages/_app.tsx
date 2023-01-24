import '../../styles/globals.css'
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
};

export default trpc.withTRPC(MyApp);
