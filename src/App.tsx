import Child_props from "./Chapters/Children/Child_props"
import Ex1_error_box from "./Chapters/Children/Ex1_error_box"
import Ex2 from "./Chapters/Children/Ex2"



function App() {
  

  return (
    <div className='bg-black h-screen text-white'>
        
        {/* <Child_props name={"abhishek"}>
           
           <h1>hello world </h1>
           <p>this Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae corrupti, architecto nostrum maiores quos autem ducimus cum dolorum eligendi rem dolorem voluptatem sapiente beatae dolores mollitia a facere magnam!</p>
        </Child_props> */}

        {/* Excersie 1 */}
        {/* <Ex1_error_box>
          <p> ⚠️ the world is ending soon </p>
        </Ex1_error_box>

        <Ex1_error_box>
          <p> ⚠️ Donot do that  </p>
        </Ex1_error_box> */}

        {/* Excersie 2 */}

         <Ex2/>
    </div>
  )
}

export default App


import React from "react";
import FileItem from "./FileItem";

const FileList = ({ files }) => (
  <div className="max-w-md mx-auto bg-white shadow-md rounded">
    {files.map((file) => (
      <FileItem key={file.id} name={file.name} type={file.type} />
    ))}
  </div>
);

export default FileList;import React from "react";
import FileList from "./FileList";

const App = () => {
  const files = [
    { id: 1, name: "index.js", type: "file" },
    { id: 2, name: "src", type: "folder" },
    { id: 3, name: "package.json", type: "file" },
  ];

  return (
    <div className="p-6">
      <FileList files={files} />
    </div>
  );
};

export default App;import React from "react";

const FileItem = ({ name, type }) => (
  <div className="flex items-center space-x-2 p-2 border-b">
    <span className="font-semibold">{type === "folder" ? "📁" : "📄"}</span>
    <span>{name}</span>
  </div>
);

export default FileItem;import React from "react";

const Tweet = ({ user, message }) => (
  <div className="p-4 border-b">
    <h4 className="font-bold">{user}</h4>
    <p>{message}</p>
  </div>
);

export default Tweet;import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => (
  <div className="max-w-md mx-auto bg-white shadow-md rounded">
    {tweets.map((tweet, index) => (
      <Tweet key={index} user={tweet.user} message={tweet.message} />
    ))}
  </div>
);

export default TweetList;import React from "react";
import TweetList from "./TweetList";

const App = () => {
  const tweets = [
    { user: "Alice", message: "Hello, World!" },
    { user: "Bob", message: "React is awesome!" },
    { user: "Charlie", message: "I love coding!" },
  ];

  return (
    <div className="p-6">
      <TweetList tweets={tweets} />
    </div>
  );
};

export default App;