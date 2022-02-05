import { Timestamp } from "firebase/firestore";
import { useState } from "react";

export default function useGetScore() {
  const [initialTimeStamp, setInitialTimeStamp] = useState();

  function recordTimestamp() {
    setInitialTimeStamp(Timestamp.now().seconds);
  }

  function getScore() {
      const score = Timestamp.now().seconds;
    console.log("TimeElapsed: ", score - initialTimeStamp);
  }

  return { recordTimestamp, getScore };
}
