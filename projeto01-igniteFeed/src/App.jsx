import { Header } from "./components/header/Header";
import style from './App.module.css';
import { Sidebar } from "./components/sidebar/Sidebar";
import { Post } from "./components/post/Post";
export function App() {

  return (
    <div>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
