import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import hoodie from "../project-assets/hoodie.png";
import winter from "../project-assets/winter.png";
import cybersecurity from "../project-assets/cybersecurity.png";
import station from "../project-assets/station.png";
import login from "../project-assets/login.png";
import list from "../project-assets/list.png";
import hangman from "../project-assets/hangman.png";
import mentoring from "../project-assets/mentoring.png";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const productData = [
    {
      id: 1,
      name: "Hoodie",
      imageurl: hoodie,
      alt: "hoodie",
      description: "Here is some description."
    }, {
      id: 2,
      name: "Mentoring",
      imageurl: mentoring,
      alt: "mentoring",
      description: "Here is some description."
    }, {
      id: 3,
      name: "Cybersecurity",
      imageurl: cybersecurity,
      alt: "cybersecurity",
      description: "Here is some description."
    }, {
      id: 4,
      name: "Winter",
      imageurl: winter,
      alt: "winter",
      description: "Here is some description."
    }, {
      id: 5,
      name: "Station",
      imageurl: station,
      alt: "station",
      description: "Here is some description."
    }, {
      id: 6,
      name: "List",
      imageurl: list,
      alt: "list",
      description: "Here is some description."
    }, {
      id: 7,
      name: "Login",
      imageurl: login,
      alt: "login",
      description: "Here is some description."
    }, {
      id: 8,
      name: "Hangman",
      imageurl: hangman,
      alt: "hangman",
      description: "Here is some description."
    }
  ]

  return (
    <Carousel responsive={responsive} infinite={true} className='carousel'>
      {productData.map((item) => (
        <div className="card">
          <img src={item.imageurl} className="product-image" alt={item.alt}/>
          {/* <p className="card-heading">{item.name}</p>
          <p className="card-description">{item.description}</p> */}
        </div>
      ))}
    </Carousel>
  )

}

export default Slider;
