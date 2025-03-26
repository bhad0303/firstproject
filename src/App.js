import Home from "./Component/Home";
import Teacher from "./Component/Teacher";
import Holiday from "./Component/Holiday";
import NotFound from "./Component/NotFound";
import Contact from "./Component/Contact";
import TalkToUs from "./Component/TalkToUs";
import {
  HashRouter,
  StaticRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Practice from "./Component/Practice";
import VideoController from "./Component/VideoController";
function App() {
  return (
    <div>
      <BrowserRouter location='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/holidays" element={<Holiday />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/talk-to-us" element={<TalkToUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <VideoController/> */}
    </div>
  );
}

export default App;
