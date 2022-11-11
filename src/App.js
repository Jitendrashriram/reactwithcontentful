import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import Whatwedo from "./components/Whatwedo";
import ProjectSlider from "./components/ProjectSlider";

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }

  kitchenAboutSectionCollection{
    items{
      title
      content
      
    }
  }

}

`;

function App() {
  const [page, setPage] = useState(null);
  const [kitchenAboutSectionCollection, setkitchenAboutSectionCollection] = useState(null); 

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/b1m86aj20dkm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ccmbNsq1D4tRxk7PTH83nQPAt0F0EbZdwtTh8V1O5w8",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        

        setPage(data.pageCollection.items[0]);
        setkitchenAboutSectionCollection(data.kitchenAboutSectionCollection.items[0]);      
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <>
    <TopBar />  
    <div className="container">
         
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <img src={page.logo.url} className="" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
             <Navbar />
          </div>
        </div>
      </nav>        

        <HeroSection />
     
    </div>
    <div className="container">
      <Home />
    </div>

    <div className="countersection">
      <div className="container">
        <Counter />
      </div>
    </div>

    <div className="intro">
      <div className="container">
        <Whatwedo />
      </div>
    </div>

    <div className="slidersection">
      <ProjectSlider />
    </div>


  
    </>
  );
}

export default App;