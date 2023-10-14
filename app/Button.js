"use client";
import { useState } from "react";
export default function Button() {
  let [timesClicked, setTimesClicked] = useState(0);

  function buttonClicked() {
    setTimesClicked(timesClicked++);
  }
  return (
    <>
      <button
        onClick={buttonClicked}
        class="bg-red-500 text-white rounded-lg p-4 hover:bg-red-700 duration-500"
      >
        click me!
      </button>
      {timesClicked}
    </>
  );
}
