import logo from './logo.svg';
import './App.css';
import Main_page from "./main_page/main_page";
import {Route, Routes} from "react-router-dom";
import SearchResult from "./search_result/SearchResult";
import Lk from "./lk/Lk";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main_page/>}/>
            <Route path='/search' element={<SearchResult/>}/>
            <Route path='/lk' element={<Lk/>}/>
        </Routes>
    );
}

export default App;
