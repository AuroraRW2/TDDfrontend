import { useState } from "react";
const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button disabled="true">Login</button> */}
        <button disabled={!username || !password}>Login</button>
      </form>
      
    </div>
  );
};

export default Login;
