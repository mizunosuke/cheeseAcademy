import React from "react";
import { Header } from "./components/Header";
import { HeaderTitle } from "./components/HeaderTitle";
import { FadeInContent } from "./components/FadeInContent";
import { About } from "./components/about/About";
import { Sliding } from "./components/about/Sliding";
import { Course } from "./components/Course";
import { News } from "./components/news/News";
import { Access } from "./components/access/Access";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <HeaderTitle/>
      </FadeInContent>
      
      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <About/>
      </FadeInContent>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <Sliding/>
      </FadeInContent>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <Course/>
      </FadeInContent>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <News/>
      </FadeInContent>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <Access/>
      </FadeInContent>

      <FadeInContent animation="fadeIn" rootMargin="-100px" triggerOnce>
        <Contact/>
      </FadeInContent>
      
      <FadeInContent animation="fadeIn" rootMargin="-5px" triggerOnce>
        <Footer/>
      </FadeInContent>
    </div>
  );
}

export default App;
