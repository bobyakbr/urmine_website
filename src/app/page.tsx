


import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Contact from './components/contact';
import About from './components/about'
import Footer from './components/footer'
import Solutions from './components/solution'
import CareersSection from "./components/careerssection";

export default function Home() {
  
    return (
        <div>

            <div>
        <main className={styles.main}>
            <video
                
                autoPlay
                loop
                muted
                className={styles.video}
            >
               <source src="hero.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Advancing Connectivity with Cutting-Edge Technologies 
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            We design and optimize cutting-edge  solutions that power wireless communication, satellite systems, IoT, and more.
          </p>
          </div>
          </div>
        </main>
        </div>

       
        <About></About>
        <Solutions></Solutions>
        <CareersSection></CareersSection>
        <Contact></Contact>

        </div>
    );
}
