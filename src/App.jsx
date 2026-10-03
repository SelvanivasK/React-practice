import { useState } from "react";
import Child from "./Child.jsx";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function valueSubmited(e) {
    e.preventDefault();
    setShow(true);
  
  }

  return (
    <>
      <form onSubmit={valueSubmited}>
        <div className="form-group">
          <label>Enter Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            onChange={(e) => { setUsername(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="mt-2 btn btn-primary">
          Submit
        </button>
      </form>
      {show ? <Child username={username} password={password} />:"Child data shows when you submit the form"}
    </>
  );
};

export default App;