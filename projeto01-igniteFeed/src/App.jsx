import { Header } from "./components/header/Header";
import './App.modules.css';
import { Sidebar } from "./components/sidebar/Sidebar";
export function App() {

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          main
        </main>
      </div>
    </div>
  )
}
