// 2.JSON파일일거오기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
// 3.Router적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About.css';
import { Detail } from './pages/Detail';
import { Navigation } from './componets/Navigation';
function App() {

  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;