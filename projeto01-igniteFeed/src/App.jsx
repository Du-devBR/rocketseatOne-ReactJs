import { Header } from "./components/header/Header";
import style from './App.module.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";
import { dataUser } from "./assets/db/dataUsers";
export function App() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <main>
          {
            dataUser.map((userComment) => (
              <Post
                key={userComment.id}
                data={userComment}
                onPublished={userComment.content.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}
