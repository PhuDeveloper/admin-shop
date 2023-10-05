'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { ConfigProvider } from 'antd';
import theme from './theme';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

// set up theme, react-query, redux

const queryClient = new QueryClient();
export default function ProviderComponent({ children }: { children: React.ReactNode }) {
  const cookiesPS = Cookies.get('token'); // => 'value cookies'

  const router = useRouter();
  useEffect(() => {
    if (!cookiesPS) {
      router.push('/auth');
    }
  }, [cookiesPS]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}
