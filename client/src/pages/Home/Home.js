import { useEffect } from "react";
import { useSelector } from "react-redux";
import SignUp from "../SignUp/SignUp";
import "./home.css";

function Home() {
  //******************** TEST: FETCH DATA FROM BACKEND WORKS! ********************//

  // const payload = {
  //   username: "chris",
  //   password: "test",
  // };
  // const options = {
  //   method: "POST",
  //   headers: {
  //     accept: "application/json",
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(payload),
  // };
  // async function logJSONData() {
  //   const response = await fetch("/signup", options);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // logJSONData();

  //******************** TEST: FETCH DATA FROM BACKEND WORKS! ********************//

  const { success, username } = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "Redux • Home";
  }, []);

  return <>{success ? <h1>Welcome {username}</h1> : <SignUp />}</>;
}

export default Home;
