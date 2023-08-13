"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { pb } from '@utils/pocketbase'

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push('/');
    }
  }, []);

  return <div>Successfully logged in</div>;
};

export default Page;
