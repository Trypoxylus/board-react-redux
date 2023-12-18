import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };
  return (
    <div className="App">
      <header className="text-gray-700 border-b border-gray-200 bg-green-500">
        <div className="container flex mx-auto p-1 flex-col md:flex-row items-center">
          <a href="a" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-lg ml-3">Meditor</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-300 duration-300">
              Log in
            </a>
          </nav>
        </div>
      </header>
      <div className="addPost">
        <input
          className="md:w-2/3 shadow appearance-none border rounded-lg w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="md:w-2/3 shadow appearance-none border rounded-lg w-full my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <br></br>
        <button
          className="bg-green-500 hover:bg-green-400 text-white rounded px-2 py-1"
          onClick={() => handleClick()}
        >
          Post
        </button>
      </div>

      <div className="">
        {postList.map((post) => (
          <div key={post.id} className="mx-auto">
            <div className="mx-auto md:w-2/3 p-4">
              <div className="bg-green-100 rounded-lg p-8">
                <div className="flex items-center">
                  <div className="bg-gray-500 text-white rounded-full mr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-base font-medium">
                    {post.name}
                  </h2>
                  <a
                    href="#"
                    className="ml-auto flex text-green-500 text-right"
                  >
                    <p>Read more</p>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <p className="text-sm">{post.content}</p>
                  <button
                    className="bg-green-500 hover:bg-green-400 text-white rounded px-2 py-1"
                    onClick={() => dispatch(deletePost({ id: post.id }))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
