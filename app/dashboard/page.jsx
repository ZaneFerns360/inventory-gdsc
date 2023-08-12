import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push('/login');
    }
  }, []);

  return <div>Successfully logged in</div>;
};

export default Page;
