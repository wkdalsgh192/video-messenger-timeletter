import React, { useEffect, useState, useRef } from "react";
import { RiMailSendLine } from "react-icons/ri";

const CountLetters = () => {
  const [num, setNum] = useState(333);
  const numRef = useRef(333);

  useEffect(() => {
    setInterval(() => {
      setNum((numRef.current += 1));
    }, 1000);
  }, []);

  return (
    <div>
      <div style={{ color: "white", paddingTop: "35vh", fontSize: "1.7rem", fontWeight: "" }}>이동중인 타임 레터</div>
      <div style={{ color: "white", fontSize: "2rem" }}>
        {" "}
        <RiMailSendLine /> <span style={{ fontSize: "3rem" }}>{num}</span>
      </div>
    </div>
  );
};

export default CountLetters;