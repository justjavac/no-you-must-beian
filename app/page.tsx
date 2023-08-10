import dynamic from "next/dynamic";

const Term = dynamic(() => import("./Term"), { ssr: false });

export default function Home() {
  return <Term />;
}
