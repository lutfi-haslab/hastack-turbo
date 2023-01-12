import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import '@styles/globals.css';
import { trpc } from "@utils/trpc";
import type { AppType, AppProps } from "next/app";
import { useRouter } from "next/router";

const App: AppType = ({Component, pageProps}: AppProps) => {
  const { pathname } = useRouter();
  const isPublicRoute = ["/"].includes(pathname);
  console.log(isPublicRoute);
  return (
    <ClerkProvider {...pageProps}>
    {isPublicRoute && <Component {...pageProps} />}
    {!isPublicRoute && (
      <>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )}
  </ClerkProvider>
  );
}

export default trpc.withTRPC(App);
