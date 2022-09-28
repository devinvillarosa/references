import React, { useMemo, useState } from "react";

const largeList = [];
for (let i = 0; i < 5000; i++) {
  largeList.push(i);
}

export function App() {
  const [name, setName] = useState("");
  const list = useMemo(() => {
    return largeList.map((item) => item + name);
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input type="text" value={name} onChange={handleChange} />
      {list.map((item) => (
        <div key={item} item={item}>
          {item}
        </div>
      ))}
    </React.Fragment>
  );
}

