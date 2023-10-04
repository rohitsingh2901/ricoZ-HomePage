import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import allCards from "./Cards/Cards.json";
import allCourseCards from "./Course cards/CourseCard.json";
import Cards from "./Cards/Cards";
import CourseCard from "./Course cards/CourseCard";

const Home = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };
  const options = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  };
  const options2 = {
    loop: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a
          id="mainHeading"
          class="navbar-brand flex flex-col justify-center ml-32 mt-2"
          href="/"
        >
          <img src="ricoz 4.png" alt="ricoz"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse flex justify-around "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav justify-between items-center">
            <li class="nav-item ml-64    ">
              <a class="nav-link text-white font-medium" href="/">
                About Us
              </a>
            </li>
            <li class="nav-item mx-16 ">
              <a class="nav-link text-white font-medium" href="/">
                Services
              </a>
            </li>
            <li class="nav-item mr-16 ">
              <a class="nav-link text-white font-medium" href="/">
                Courses
              </a>
            </li>
            <li class="nav-item font-medium">
              <a class="nav-link text-white" href="/">
                Connect
              </a>
            </li>
          </ul>
          <button
            class="btn-primary py-2 font-medium px-4 rounded-3xl"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <div id="bannerBox">
        <div className="row">
          <div className="col-6 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-75">
              <h1 className="text-white text-6xl">
                Discover Top Tech Profesionals in Minutes.
              </h1>
              <h4 className="text-white my-2">
                Steamline Your Business Needs with Ricoz's ALL-in-One Service
                Hub
              </h4>
              <div className="w-100 my-2">
                <button
                  class="btn-primary text-xl py-2 font-medium px-4 rounded-3xl"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="flex justify-center mt-4 ">
              <img src="unsplash_yTwXpLO5HAA.png" alt="colleagues"></img>
            </div>
            <div>
              <img
                id="img2"
                src="unsplash_yTwXpLO5HAA2.png"
                alt="motivation"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="text-4xl font-bold text-center mt-12">
        Explore Our Platform's Unique Features
      </div>
      <div class="owl-nav flex justify-end mr-8">
        <p
          title="Prev"
          type="button"
          onClick={handlePrevClick}
          role="presentation"
          class="owl-prev hover: cursor-pointer"
        >
          <span aria-label="Previous">
            <i class="fa-solid fa-angle-left  fa-2xl"></i>
          </span>
        </p>
        <p
          title="Next"
          type="button"
          onClick={handleNextClick}
          role="presentation"
          class="owl-next hover: cursor-pointer"
        >
          <span aria-label="Next">
            <i class="fa-solid fa-angle-right fa-2xl"></i>
          </span>
        </p>
      </div>
      <div className=" my-12">
        <OwlCarousel
          className="flex owl-carousel owl-theme mt-8"
          ref={carouselRef}
          {...options}
        >
          {allCards.CardsJson.map((card, index) => {
            return (
              <div class="item">
                <Cards
                  heading={card.heading}
                  description={card.description}
                  imgSrc={card.imgSrc}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>

      <div id="whyChoose">
        <h1 className="text-white text-center py-8">Why Choose Ricoz?</h1>
        <div className="row">
          <div className="col-6">
            <div
              className="overflow-hidden flex justify-center items-center"
              style={{ height: "30vw" }}
            >
              <img src="unsplash_yTwXpLO5HAA3.png" alt="boy"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="flex flex-col justify-center">
              <div className="flex justify-around items-center">
                <div
                  className="rounded-full bg-white flex justify-center items-center my-8"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i class="fa-solid fa-diagram-project fa-2xl"></i>
                </div>
                <div className="w-75">
                  <h3 className=" text-white">Vast Professional Network</h3>
                  <p className=" text-white">
                    Access a wide range of skilled tech professionals, all in
                    one platform.
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <div
                  className="rounded-full bg-white flex justify-center items-center my-8"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i class="fa-solid fa-arrows-up-to-line fa-2xl"></i>
                </div>
                <div className="w-75">
                  <h3 className=" text-white">Quality You Can Trust</h3>
                  <p className=" text-white">
                    Our stringent quality scoring system ensures that you
                    receive exceptional services.
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <div
                  className="rounded-full bg-white flex justify-center items-center my-8"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i class="fa-solid fa-people-arrows fa-2xl"></i>
                </div>
                <div className="w-75">
                  <h3 className=" text-white">Effortless Collaboration</h3>
                  <p className=" text-white">
                    Our integrated tools facilitate seamless communication and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center">
                <div
                  className="rounded-full bg-white flex justify-center items-center my-8"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i class="fa-solid fa-people-roof fa-2xl"></i>
                </div>
                <div className="w-75">
                  <h3 className=" text-white">Save Time and Effort</h3>
                  <p className=" text-white">
                    With our platform, finding professionals and managing
                    projects becomes effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="flex justify-around">
          <div>
            <h2>Unlock New Skills with Our Courses</h2>
            <h6>Learn and grow at your own pace</h6>
          </div>
          <div>
            <button
              class="btn-primary text-xl py-2 font-medium px-4 rounded-3xl"
              type="submit"
            >
              Explore More
            </button>
          </div>
        </div>
        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
          {allCourseCards.CardsJson.map((card, index) => {
            return (
              <div class="item">
                <CourseCard
                  courseName={card.courseName}
                  description={card.description}
                  price={card.price}
                  imgSrc={card.imgSrc}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>

      <div id="story" className="my-16">
        <h1 className="text-center text-5xl text-white py-24">
          {" "}
          Real Stories From Real Professionals
        </h1>
        <OwlCarousel
          id="owl3"
          className="flex owl-carousel owl-theme mt-8"
          {...options2}
        >
          <div
            class="card item"
            style={{ width: "20rem", height: "28rem", borderRadius: "25px" }}
          >
            <div className="flex items-center justify-center" id="storyCardImg">
              <img
                src="https://img.freepik.com/free-photo/positive-young-caucasian-male-with-pleasant-friendly-smile-shows-white-teeth-rejoices-new-stage-life-wears-casual-striped-sweater-round-spectacles-stands-alone-against-pink-wall_273609-14966.jpg?w=1380&t=st=1696387892~exp=1696388492~hmac=b7b3de2fcf6a5768e736a8b8fc862cefce76219d48150f26ccd506c449dc19da"
                className="dp w-50"
                alt="john"
              />
              <div className="ml-4">
                <h5 class="card-title my-0">John Doe</h5>
                <small className="form-text text-muted my-0">Graduted</small>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-3xl font-medium">
                “I recommend this to All”
              </p>
              <p className="text-gray-600">
                Ricoz connected me with amazing clients. The quality scoring
                system ensures I work on exciting projects while maintaining my
                reputation.
              </p>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
            </div>
          </div>
          <div
            class="card item"
            style={{ width: "20rem", height: "28rem", borderRadius: "25px" }}
          >
            <div className="flex items-center justify-center" id="storyCardImg">
              <img
                src="https://img.freepik.com/free-photo/beautiful-female-half-length-portrait-isolated-young-emotional-indian-woman-dress-standing-crossing-hands-negative-space-facial-expression-human-emotions-concept_155003-18237.jpg?w=1380&t=st=1696397401~exp=1696398001~hmac=257206feff7cb9ed58f5dfea881423c70d7cc8f7095e6d5fead2252f5ecf4e90"
                className="dp2 w-50"
                alt="john"
              />
              <div className="ml-4">
                <h5 class="card-title my-0">Alice Smith</h5>
                <small className="form-text text-muted my-0">
                  UI/UX Developer
                </small>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-3xl font-medium">
                “The Support is Awesome”
              </p>
              <p className="text-gray-600">
                As a freelancer, Ricoz's instant search feature saves me time.
                It's a one-stop platform for all my degital marketing needs.
              </p>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
            </div>
          </div>

          <div
            class="card item"
            style={{ width: "20rem", height: "28rem", borderRadius: "25px" }}
          >
            <div className="flex items-center justify-center" id="storyCardImg">
              <img
                src="https://img.freepik.com/free-photo/woman-all-black-outfit-wearing-glasses-posing_114579-26396.jpg?w=1380&t=st=1696397572~exp=1696398172~hmac=88db112f9a274995f14a158b3301def77c588281a2550cae777374268cb7ff6b"
                className="dp3 w-50"
                alt="john"
              />
              <div className="ml-4">
                <h5 class="card-title my-0">Sophia Miller</h5>
                <small className="form-text text-muted my-0">Student</small>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-3xl font-medium">
                “A Game Changer for Us”
              </p>
              <p className="text-gray-600">
                I've learned and earned on Ricoz. The courses are well-designed,
                and the integrated tools streamline communication with clients.
              </p>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
              <i
                class="fa-solid fa-star fa-sm mx-1"
                style={{ color: "#ffc54f" }}
              ></i>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div>
        <h2 className="text-center">
          Enhance Your Workflow with Integrated Tools
        </h2>

        <div class="container contains mt-64 mb-48">
          <div class="half-circle"></div>
          <div class="half-circle2"></div>
          <div className="flex justify-center ">
            <img src="Ellipse 7146.png" alt="Snow" />
          </div>

          <div class="bottom-left text-black flex flex-col justify-center items-center">
            <img
              className="w-50 "
              src="https://cdn-icons-png.flaticon.com/512/404/404621.png?ga=GA1.1.877150888.1686539129"
              alt="msg"
            ></img>
            <h3>CRM System</h3>
            <p>
              Manage client relationships effectively with our user-friendly CRM
              system.
            </p>
          </div>
          <div class="top-left text-black flex flex-col justify-center items-center">
            <img
              className="w-50"
              src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png?ga=GA1.1.877150888.1686539129"
              alt="msg"
            ></img>
            <h3>Messaging Platform</h3>
            <p>
              Stay connected and collaborate seamlessly with clients and team
              members.
            </p>
          </div>
          <div class="top-right text-black  flex flex-col justify-center items-center">
            <img
              className="w-50"
              src="https://cdn-icons-png.flaticon.com/512/1006/1006657.png?ga=GA1.1.877150888.1686539129"
              alt="collaborate"
            ></img>
            <h3>Collaborative Workspace</h3>
            <p>
              Experience the power of collaboration in our shared workspace
              together.
            </p>
          </div>
          <div class="bottom-right text-black flex flex-col justify-center items-center">
            <img
              className="w-50"
              src="https://cdn-icons-png.flaticon.com/512/3652/3652267.png?ga=GA1.1.877150888.1686539129"
              alt="msg"
            ></img>
            <h3>Calendar Integration</h3>
            <p>
              Simplify your scheduling and time management with our calendar
              integration.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            class="btn-primary text-xl py-2 font-medium px-4 rounded-3xl"
            type="submit"
          >
            Get Started
          </button>
        </div>
      </div>

      <div id="contact">
        <div className="row">
          <div className="col-6">
            <img src="unsplash_yTwXpLO5HAA4.png" alt="contact"></img>
          </div>
          <div className="col-6">
            
            <div class="container">
   <div class="text">
   <h1>Get in touch</h1>
   </div>
   <form action="#">
      <div class="form-row">
         <div class="input-data">
            <input style={{background:"#14121f"}} type="text" required/>
            <div class="underline"></div>
            <label className="text-white" for="first_name">First Name</label>
         </div>
      </div>
      <div class="form-row">
         <div class="input-data">
            <input  style={{background:"#14121f"}}  type="text" required/>
            <div class="underline"></div>
            <label className="text-white" for="email">Email Address</label>
         </div>
         <div class="input-data">
            <input  style={{background:"#14121f"}}  type="text" required/>
            <div class="underline"></div>
            <label className="text-white" for="email">Email Address</label>
         </div>
      </div>
      <div class="form-row">
         <div class="input-data textarea">
            <textarea style={{background:"#14121f"}} rows="8" cols="80" required></textarea>
            
            <div class="underline"></div>
            <label className="text-white" style={{background:"#14121f"}}  for="message">Write your message</label>
            
         </div>
      </div>
      <div class="form-row submit-btn">
         <div class="input-data">
            <div class="inner"></div>
            <input style={{background:"#14121f"}}  type="submit" value="Submit"/>
         </div>
      </div>
   </form>
</div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
