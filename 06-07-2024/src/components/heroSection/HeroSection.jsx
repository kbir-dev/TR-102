import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
  return (
      <Carousel
        autoPlay={true}
        interval={2000}
        navButtonsAlwaysVisible
        infiniteLoop={true}
        emulateTouch
        showThumbs={false}
      >
        <div>
          <img src="./img/her.jpg" alt="Slide 1" style={{ maxWidth: '100%' }} />
        </div>
        <div>
          <img src="./img/her.jpg" alt="Slide 1" style={{ maxWidth: '100%' }} />
        </div>
        <div>
          <img src="./img/her.jpg" alt="Slide 1" style={{ maxWidth: '100%' }} />
        </div>
      </Carousel>
  );
};

export default HeroSection;
