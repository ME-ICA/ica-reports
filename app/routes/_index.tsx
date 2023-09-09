import { Tabs } from "@radix-ui/react-tabs";
import type { V2_MetaFunction } from "@remix-run/node";
import TabsDemo from "./tabs/tabs";
import LoadButton from "./tabs/loadButton";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="flex flex-col h-[100%]">
        <TabsDemo />
        <LoadButton />
      </div>
    </div>
  );
}
