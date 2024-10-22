import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import ProjectPreview from "../components/ProjectPreview";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <div className="overflow-hidden pb-4">
          <div className="relative">
            <div className="bg-cover bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <div className="p-4">
                <Header />
                <Profile />
              </div>
            </div>
          </div>
        </div>
        <div className="whitespace-normal">
          <ProjectPreview />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};


export default Home;
