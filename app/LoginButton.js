"use client";
import { useState } from "react";
export default function LoginButton() {
  const [buttonText, setButtonText] = useState("Log In");

  function login() {
    setButtonText(buttonText === "Log In" ? "Log Out" : "Log In");
  }
  return (
    <>
      <button
        onClick={login}
        className="bg-red-500 text-white rounded-lg p-4 hover:bg-red-700 duration-500"
      >
        {buttonText}
      </button>
    </>
  );
}
