"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const authData = await pb.collection('users').authWithPassword(username, password);
      if (authData && pb.authStore.isValid) {
        router.push('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'></h1>
      {error && <p className='text-red-500'>{error}</p>}
      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Username or Email</span>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username or Email'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Password</span>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
            className='form_input'
          />
        </label>
        <button type='submit' className='px-5 py-1.5 text-lg bg-sky-950 rounded-full text-white'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Login;
