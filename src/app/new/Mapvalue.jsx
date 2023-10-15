"use client";
import React, { useContext } from "react";
import { Valuecontext } from "./page";
function Mapvalue() {
  const values = useContext(Valuecontext);
  return (
    <div>
      {values?.map((data) => {
        return <p key={data}>{data.title}</p>;
      })}
    </div>
  );
}

export default Mapvalue;
