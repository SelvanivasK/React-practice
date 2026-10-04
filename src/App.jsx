import { useState } from "react";
import Child from "./Child.jsx";

const App = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState('')
  // const [show, setShow] = useState(false);

  function valueSubmited(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username")
    const password = formData.get("password")
    // setShow(true);
    // setUsername(username);
    // setPassword(password);
    console.log(username, password);
    setFormData({username,password})

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
            name="username"
            // value={username}
            // onChange={(e) => { setUsername(e.target.value)}}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password" 
            placeholder="Password"
            // value={password}
            // onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="mt-2 btn btn-primary">
          Submit
        </button>
      </form>
      {/* {show ? <Child username={username} password={password} />:"Child data shows when you submit the form"} */}
      {formData && <Child formData={formData} />}
    </>
  );
};

export default App;