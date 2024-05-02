import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Mandy Lai</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Mandy</h2>
        <p>Hi, I'm Mandy, a San Diego-based product designer and sticker doodler!</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="portfolio-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSih7YjzeXOaStdQSdZ378FBSQmJW5F936Wojf_JBsJpw&s" alt="Project 1" />
          <p>Triton Software Engineering</p>
        </div>
        <div className="portfolio-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtfayobwgwX_hGE6p3Le6759O-xVhXY-MtrdRUcg4Yg&s" alt="Project 2" />
          <p>Littlemandyart</p>
        </div>
      </section>
      <section id="contact">
        <h2>Say hi</h2>
        <p>Email: mslai@ucsd.edu</p>
        <p>Phone: 123-456-7890</p>
      </section>
      <footer>
        <p>&copy; 2024 Mandy Lai</p>
      </footer>
    </div>
  );
}

export default App;