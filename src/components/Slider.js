import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import hoodie from "../project-assets/hoodie.png";
import create from "../project-assets/create.png";
import winter from "../project-assets/winter.png";
import cybersecurity from "../project-assets/cybersecurity.png";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
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
      name: "Create",
      imageurl: create,
      alt: "create",
      description: "Here is some description."
    }, {
      id: 3,
      name: "Winter",
      imageurl: winter,
      alt: "winter",
      description: "Here is some description."
    }, {
      id: 3,
      name: "Cybersecurity",
      imageurl: cybersecurity,
      alt: "cybersecurity",
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
