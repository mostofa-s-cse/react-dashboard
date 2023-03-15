import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/layout/Header";
import Sidebar from "./Components/layout/Sidebar";
import Footer from "./Components/layout/Footer";
import DeashBoard from "./Components/Pages/DeashBoard";
function App() {
  return (
    <>
      <div class="wrapper">
        {/* ========== Left Sidebar Start ========== */}
        <Sidebar />
        {/* Left Sidebar End */}
        {/* ============================================================== */}
        {/* Start Page Content here */}
        {/* ============================================================== */}
        <div className="content-page">
          <div className="content">
            {/* Topbar Start */}
            <Header />
            {/* end Topbar */}
            {/* Start Content*/}

            <DeashBoard />
            {/* container */}
          </div>
          {/* content */}
          {/* Footer Start */}
          <Footer />
          {/* end Footer */}
        </div>
        {/* ============================================================== */}
        {/* End Page content */}
        {/* ============================================================== */}
      </div>
    </>
  );
}

export default App;
