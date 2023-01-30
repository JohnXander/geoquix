import '../../styles/globals.css'
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { Poppins } from '@next/font/google'
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`bg-gray-800 text-white h-screen relative ${poppins.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
};

export default trpc.withTRPC(MyApp);
