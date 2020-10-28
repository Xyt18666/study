import "./App.css";
import Jsx from "./components/2.jsx基础.jsx";
import ZuJian from "./components/4.组件.jsx";
import FuToZi from "./components/5.父向子传值.jsx";

function App() {
    return (
        <div className="App">
            <Jsx></Jsx>
            <ZuJian
                water="下雨"
                datas={{
                    name: "names",
                    age: 18,
                }}
            ></ZuJian>
            <FuToZi></FuToZi>
        </div>
    );
}

export default App;
