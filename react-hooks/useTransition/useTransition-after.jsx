import React, { useTransition, useState } from "react";

const largeList = [];
for (let i = 0; i < 5000; i++) {
  largeList.push(i);
}

export function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(largeList);
  const [isPending, startTransition] = useTransition()


  function handleChange(e) {
    setName(e.target.value);
    startTransition(() => {
    setList(largeList.map((item) => item + e.target.value));
    })
  }

  return (
    <React.Fragment>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? 'Loading...' : list.map((item) => (
        <div key={item} item={item}>
          {item}
        </div>
      ))}
    </React.Fragment>
  );
}

