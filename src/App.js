import Hero from "./components/Hero";
import Projects from "./components/Projects";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  ;`


function App() {
  return (
    <div className="App">
        <Container>
          <Hero/>
          <Projects/>
        </Container>
    </div>
  );
}

export default App;


