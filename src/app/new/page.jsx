"use client";
import { useState } from "react";
export default function Page() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const addfunction = (e) => {
    e.preventDefault();
    if (value.length !== 0) {
      let check = array.every((data) => data.title !== value);
      if (check) {
        const data = { title: value };
        setArray([...array, data]);
        setValue("");
      } else {
      }
    }
  };
  return (
    <>
      <form>
        items:
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border"
        />
        {/* <Link href="/">hii</Link> */}
        <button type="submit" onClick={(e) => addfunction(e)}>
          Add
        </button>
      </form>
      {/* {array.map((data) => {
        return <p>{data.title}</p>;
      })} */}
    </>
  );
}
