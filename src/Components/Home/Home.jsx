import { useEffect } from "react";
import "./Home.scss";
import heroImage from '../../assets/Images/ussama-azam-U1LNi90EKAE-unsplash.png'
import $ from 'jquery';

function Home() {
  useEffect(() => {
    const div = $("#home-container");
    div.removeClass('d-none').addClass('d-flex');
    div.find('.introduction .title').addClass('typing');
  }, []);
  return (
    <>
      <div className="main offset-lg-3 col-md-12 col-lg-9 d-flex align-items-lg-center slide-fade-enter-active" >
        <div className="home-container d-none p-md-5 align-items-center text-white flex-lg-row flex-md-column flex-sm-column" id ="home-container">
          <div className="introduction">
            <h1 className="title">Welcome to My Portfolio!</h1>
            <p className="detail">
              I'm a passionate web developer eager to create innovative and
              user-friendly digital experiences.
            </p>
          </div>
          <div className="image-container-main">
            <div className="image-container">

            <img src={heroImage} width={500} alt="Developer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
