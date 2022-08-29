import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
// components
import Loader from '../components/Loader';
import Layout from '../components/Layout/Layout';
// styles
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {loading && <Loader />}
      {!loading && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Fragment>
  );
}