import Image from "next/image";
import Button from "./Button";
import Login from "./login";
require("dotenv").config();
export default function Home() {
  return (
    <>
      <link rel="icon" href="/public/favicon.ico?" type="image/x-icon" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button />
        <Login />
        <div className="flex">
          <p className="">Budget Board Games</p>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/BBG.png"
            alt="Budget Board Games Logo"
            width={50}
            height={50}
          />
        </div>
      </main>
    </>
  );
}
