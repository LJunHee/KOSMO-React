import { createContext, useContext, useState } from "react";

const init=['김','개똥'];
const UserContext = createContext();

export default function Ex09() {
  const [user, setUser] = useState(init);

  const func=(a)=>{ 
    const arr=[...user];
    arr[0]=a;
    setUser(arr);
};

  return (
    <UserContext.Provider value={{user,func}}>
      <h1>{`Hello ${user[0]} ${user[1]}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const {user,func} = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user[1]}  ${user[0]}`}</h2>
      <button onClick={e=>func('홍')}>click</button>
    </>
  );
}