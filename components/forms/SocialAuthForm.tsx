'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

import ROUTES from '@/constants/routes';
import { toast } from 'sonner';

import { Button } from '../ui/button';

const SocialAuthForm = () => {
  const buttonClass =
    'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5';

  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      const res = await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: true,
      });
      console.log('SignIn Result:', res);
    } catch (error) {
      console.log(error);

      toast('Sign-in failed', {
        description:
          error instanceof Error
            ? error.message
            : 'An error occurred during sign-in',
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          height={20}
          width={20}
          className=" mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
