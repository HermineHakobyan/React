import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import "./main.css";
import "./mycss.css";
import OwnDate from './Date';

// function App() {
//   const date = new Date();
//   return (
//     <div className="App">
     
//      {date.toLocaleDateString()}
        
//         {/* ete tiv piti tanq kam ayl ban batsi stringits piti grenq {} */}
//         <OwnDate></OwnDate>
        
//         <Welcome name="Karo" age={10}/>
//         <Welcome name="Anna" age={18}/>
      
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <a href="/">Edukator</a>
            </div>
            <ul className="navigation">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Welcome to Edukator</h1>
          <p>Learn and grow with our diverse courses.</p>
          <a href="/courses" className="cta-button">Browse Courses</a>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Edukator is a leading online learning platform that offers a wide range of courses on various topics. Our mission is to provide accessible and high-quality education to everyone.</p>
        </div>
      </section>

      <section className="courses">
        <div className="container">
          <h2>Popular Courses</h2>
          <div className="course-list">
            <div className="course">
              <div className="course-image">
                <img src="course1.jpg" alt="Course 1" />
              </div>
              <div className="course-details">
                <h3>Introduction to Programming</h3>
                <p>A beginner-friendly course that teaches the basics of programming using popular languages like JavaScript and Python.</p>
                <a href="/courses/1" className="course-link">Learn More</a>
              </div>
            </div>
            <div className="course">
              <div className="course-image">
                <img src="course2.jpg" alt="Course 2" />
              </div>
              <div className="course-details">
                <h3>Data Science Fundamentals</h3>
                <p>Explore the field of data science and learn about statistical analysis, machine learning, and data visualization.</p>
                <a href="/courses/2" className="course-link">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, please don't hesitate to get in touch with us.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Edukator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;