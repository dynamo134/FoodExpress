import React, { use } from "react";

export const Profile = (props) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log("Component API call");
  }, []);
  return (
    <div>
      <h2>Profile Fucntional Component</h2>
      <h2>Name : {props.name}</h2>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      ></button>
    </div>
  );
};
