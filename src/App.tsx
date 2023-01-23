import styless from "./App.module.css";
import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";
import { Sidebar } from "./components/sidebar/Sidebar";
import  "./global.css";
//parei  03. Os motores do React, aula 24

interface Author {
  name:string;
  role:string;
  avatarUrl:string;
}

interface Content{
  type: 'paragraph' | 'link'; 
  content: string
}

interface PostProps {
  id:number;
  author: Author;
  content: Content[];
  publishedAt: Date
}



const posts:PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1408812978363830279/p_IPCQBw_400x400.jpg",
      name: "Lucas Jeronimo da Rocha",
      role: "Dev",
    } ,
    content:  [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam amet ea quia natus sint reprehenderit officia voluptatibus quod!!",
      },
      { type: "link", content: "link" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1408812978363830279/p_IPCQBw_400x400.jpg",
      name: "Lucas Jeronimo da Rocha",
      role: "Dev",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      },
      { type: "link", content: "link" },
    ],
    publishedAt: new Date("2022-05-03 20:30:00"),
  },
] ;
export function App() {
  return (
    <>
      <Header key={1} />
      <div className={styless.wrapper}>
        <Sidebar key={1} />
        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
