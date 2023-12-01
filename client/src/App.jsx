import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PostCards from "./components/PostCards";
import { Posts } from "./dummy";
const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <main className="h-auto  flex flex-col items-center ">
      {user ? (
        <div className="flex flex-col ">
          <div className="  flex  flex-col items-center">
            <Navbar user={user} />
            {Posts.map((post, index) => (
              <PostCards
                key={index}
                username={post.username}
                avatar={post.avatar}
                image={post.post}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="login h-1/2 mt-20 py-6 border flex flex-col justify-center max-w-sm w-full gap-2 items-center">
          <input
            type="text"
            placeholder="username"
            className="outline-none border px-1 py-1 rounded-md"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="border-none px-3 py-1 rounded-md text-white bg-sky-500"
            onClick={() => setUser(username)}
          >
            Login
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
