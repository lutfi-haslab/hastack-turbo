import {Button} from "@acme/ui";
import {SignedIn, SignedOut, useClerk} from "@clerk/nextjs";
import TRPCComponent from "@components/TRPCComponent";
import {add} from "@acme/utils";
import {trpc} from "@utils/trpc";
import type {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

type HeaderProps = {
  children: JSX.Element;
};

const PostCard: React.FC<{post: string, title: string}> = ({post, title}) => {
  return (
    <div className="max-w-2xl  p-4 transition-all hover:scale-[105%]">
      <h2 className="text-2xl font-bold text-blue-700">{title}</h2>
      <p>{post}</p>
    </div>
  );
};

const Index: NextPage = () => {
  const {signOut} = useClerk();
  const post = trpc.hello.test.useQuery();
  console.log(post);
  return (
    <div className={"w-full h-screen flex flex-col items-center justify-center"}>
      <Head>
        <title>Hastack</title>
        <meta name="description" content="next-expo-trpc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={"font-bold text-5xl mb-10"}>next-expo-trpc</h1>
      {/*  */}
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center items-center bg-slate-400 rounded-xl m-3">
          <p className="text-xl text-black font-semibold">Component from package Utils</p>
          <p className="text-2xl text-blue-700 font-semibold">Add: 5 + 7 = {add(5, 7)}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-400 rounded-xl m-3">
        <p className="text-xl text-black font-semibold">Component using tRPC</p>
          {post.data &&
            post.data.map((item) => {
              return <PostCard key={item.id} post={item.content} title={item.title} />;
            })}
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-400 rounded-xl m-3">
        <p className="text-xl text-black font-semibold">Component using tRPC</p>
          <TRPCComponent />
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-10">
        <Button onClick={() => console.log("Pressed!")} text="Button from React Native Web" />
        <SignedOut>
          <Link href="/sign-in" className="bg-blue-700 px-3 py-2 rounded-xl">Sign In</Link>
          <Link href="/sign-up" className="bg-blue-700 px-3 py-2 rounded-xl">Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <button className="bg-blue-700 px-3 py-2 rounded-xl" onClick={() => signOut()}>Sign out</button>
        </SignedIn>
      </div>
    </div>
  );
};

export default Index;
