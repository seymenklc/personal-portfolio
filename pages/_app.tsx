import type { AppProps } from 'next/app';
// components
import Layout from '../components/Layout/Layout';
// styles
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}