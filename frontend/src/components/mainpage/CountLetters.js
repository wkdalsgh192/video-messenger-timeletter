import React, { useEffect, useState, useRef } from "react";

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
      <div style={{ color: "white", paddingTop: "250px", fontSize: "1.7rem", fontWeight: "bold" }}>실시간 생성된 타임 레터</div>
      <div style={{ color: "white", fontSize: "3rem" }}> ★ {num}</div>
    </div>
  );
};

export default CountLetters;