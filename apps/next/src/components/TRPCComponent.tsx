import React from "react";
import {trpc} from "@utils/trpc";

const TRPCComponent: React.FC = () => {
  const hello = trpc.hello.hello.useQuery({text: "@next-expo-trpc/web"});

  return (
    <div>
      <p className="text-2xl text-blue-700 font-semibold">tRPC: {!hello.data ? "Loading..." : hello.data.greeting}</p>
    </div>
  );
};

export default TRPCComponent;
