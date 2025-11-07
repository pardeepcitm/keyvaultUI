

import './App.css'
import Home from "./features/home/component/Home.tsx";
import LoginPage from "./features/auth/pages/LoginPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )




  /*const [count, setCount] = useState(0)
  const [data, setData] = useState<Item[]>([])

    type Item = {
        id: number;
        name: string;
    };

  useEffect(() => {
      axios.get('https://keyvaulttesting-cvf6abe9b2gudaff.centralindia-01.azurewebsites.net/api/Products').then(response => setData(response.data))
  })


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    {item.id} - {item.name}
                </li>
            ))}
        </ul>

    </>
  )*/
}

export default App
