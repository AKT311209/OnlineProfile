import '../globalStyles.css';

import type { AppProps } from 'next/app';
import { memo } from 'react';

const MyApp = memo(({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
));

export default MyApp;
