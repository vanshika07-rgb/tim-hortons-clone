import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Promotion from "./components/Promotion";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

import FullMenu from "./pages/FullMenu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import MyOrders from "./pages/MyOrders";

import "./App.css";

/* =========================================
   PROTECTED ROUTE
========================================= */

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("timHortonsUser");

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Promotion />
      <Categories />
      <Footer />
    </>
  );
}

/* =========================================
   MENU PAGE
========================================= */

function MenuPage() {
  return (
    <>
      <Navbar />
      <Menu />
      <Categories />
      <Footer />
    </>
  );
}

/* =========================================
   FRANCHISING PAGE
========================================= */

function Franchising() {
  return (
    <>
      <Navbar />

      <main className="franchising-page">

        <section className="franchising-hero">

          <div className="franchising-content">

            <p>GROW WITH US</p>

            <h1>
              Build Something
              <br />
              <span>Great Together.</span>
            </h1>

            <p className="franchising-description">
              Bring the Tim Hortons experience to your community
              and build a business with a brand people love.
            </p>

            <button className="primary-cta">
              EXPLORE FRANCHISING →
            </button>

          </div>

          <div className="franchising-visual">
            <div className="floating-cup">☕</div>
            <div className="floating-donut">🍩</div>
            <div className="franchise-circle">
              <span>TIM</span>
              <strong>HORTONS</strong>
            </div>
          </div>

        </section>

        <section className="franchising-benefits">

          <div className="section-heading">
            <p>WHY TIM HORTONS</p>
            <h2>
              More Than A
              <br />
              Coffee Shop.
            </h2>
          </div>

          <div className="benefit-grid">

            <div className="benefit-card">
              <span>☕</span>
              <h3>Trusted Brand</h3>
              <p>
                Join a globally recognised coffee and restaurant brand.
              </p>
            </div>

            <div className="benefit-card">
              <span>📈</span>
              <h3>Business Support</h3>
              <p>
                Get guidance, training and support throughout your journey.
              </p>
            </div>

            <div className="benefit-card">
              <span>🤝</span>
              <h3>Built Together</h3>
              <p>
                Work alongside a team committed to your success.
              </p>
            </div>

          </div>

        </section>

        <section className="franchising-cta">

          <div>
            <p>READY TO START?</p>

            <h2>
              Let's Brew Something
              <br />
              Amazing.
            </h2>
          </div>

          <button className="primary-cta">
            GET STARTED →
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   CATERING PAGE
========================================= */

function Catering() {
  return (
    <>
      <Navbar />

      <main className="catering-page">

        <section className="catering-hero">

          <div className="catering-hero-content">

            <p>BRING THE GOOD STUFF</p>

            <h1>
              Catering Made
              <br />
              <span>Deliciously Easy.</span>
            </h1>

            <p>
              From office meetings to celebrations,
              bring your favourite Tim Hortons treats
              to every occasion.
            </p>

            <button className="primary-cta">
              START YOUR ORDER →
            </button>

          </div>

          <div className="catering-visual">

            <div className="catering-main-icon">
              🍩
            </div>

            <div className="catering-floating coffee">
              ☕
            </div>

            <div className="catering-floating sandwich">
              🥪
            </div>

            <div className="catering-floating drink">
              🥤
            </div>

          </div>

        </section>

        <section className="catering-options">

          <div className="section-heading">

            <p>PERFECT FOR EVERY OCCASION</p>

            <h2>
              Something For
              <br />
              Everyone.
            </h2>

          </div>

          <div className="catering-grid">

            <div className="catering-card">
              <span>🏢</span>
              <h3>Office Meetings</h3>
              <p>
                Keep your team fuelled with fresh coffee,
                breakfast and treats.
              </p>
            </div>

            <div className="catering-card">
              <span>🎉</span>
              <h3>Celebrations</h3>
              <p>
                Make birthdays, parties and special moments
                even sweeter.
              </p>
            </div>

            <div className="catering-card">
              <span>🎓</span>
              <h3>Events</h3>
              <p>
                Delicious options for school, college
                and community events.
              </p>
            </div>

          </div>

        </section>

        <section className="catering-cta">

          <h2>
            Make Your Next Event
            <br />
            A Little More Delicious.
          </h2>

          <button className="primary-cta">
            ORDER CATERING →
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   OUR STORY PAGE
========================================= */

function OurStory() {
  return (
    <>
      <Navbar />

      <main className="story-page">

        <section className="story-hero">

          <div className="story-hero-content">

            <p>OUR STORY</p>

            <h1>
              Good Coffee.
              <br />
              <span>Good People.</span>
              <br />
              Good Times.
            </h1>

            <p>
              A simple idea brewed into something
              loved by millions.
            </p>

          </div>

          <div className="story-hero-visual">
            ☕
          </div>

        </section>

        <section className="story-beginning">

          <div className="story-beginning-visual">
            🍁
          </div>

          <div className="story-beginning-content">

            <p>WHERE IT ALL BEGAN</p>

            <h2>
              From A Small
              <br />
              Coffee Shop...
            </h2>

            <p>
              Tim Hortons began with a simple vision:
              serve great coffee, delicious food and create
              a place where people could come together.
            </p>

            <p>
              Today, that spirit continues through every
              cup, every meal and every connection we make.
            </p>

          </div>

        </section>

        <section className="story-values">

          <div className="section-heading">

            <p>WHAT WE BELIEVE</p>

            <h2>
              It's About
              <br />
              More Than Coffee.
            </h2>

          </div>

          <div className="story-value-grid">

            <div className="story-value-card">
              <span>❤️</span>
              <h3>Community</h3>
              <p>
                Bringing people together, one cup at a time.
              </p>
            </div>

            <div className="story-value-card">
              <span>☕</span>
              <h3>Quality</h3>
              <p>
                Great ingredients and delicious flavours
                in everything we serve.
              </p>
            </div>

            <div className="story-value-card">
              <span>😊</span>
              <h3>Hospitality</h3>
              <p>
                Making every guest feel welcome.
              </p>
            </div>

          </div>

        </section>

        <section className="story-cta">

          <h2>
            Your Next Favourite
            <br />
            Is Waiting.
          </h2>

          <Link to="/full-menu">
            EXPLORE OUR MENU →
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   LOCATIONS PAGE
========================================= */

function Locations() {
  const locations = [
    {
      name: "Tim Hortons - Downtown",
      address: "123 Main Street, Ahmedabad",
      hours: "Open · Closes 10:00 PM",
    },
    {
      name: "City Centre",
      address: "45 Central Avenue, Ahmedabad",
      hours: "Open · Closes 11:00 PM",
    },
    {
      name: "Riverside",
      address: "78 River Road, Ahmedabad",
      hours: "Open · Closes 10:30 PM",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="locations-page">

        <section className="locations-hero">

          <p>FIND YOUR NEAREST TIMS</p>

          <h1>
            There's Always
            <br />
            One Nearby.
          </h1>

          <div className="location-search">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by city or location"
            />
          </div>

        </section>

        <section className="locations-map">

          <div className="map-road road-one"></div>
          <div className="map-road road-two"></div>
          <div className="map-road road-three"></div>

          <div className="map-pin pin-one">📍</div>
          <div className="map-pin pin-two">📍</div>
          <div className="map-pin pin-three">📍</div>

          <div className="map-center">
            ☕
          </div>

        </section>

        <section className="location-list-section">

          <div className="section-heading">

            <p>LOCATIONS</p>

            <h2>
              Find Your
              <br />
              Nearest Tims.
            </h2>

          </div>

          <div className="location-cards">

            {locations.map((location, index) => (

              <div
                className="location-card"
                key={index}
              >

                <div className="location-icon">
                  ☕
                </div>

                <div>
                  <h3>{location.name}</h3>

                  <p>{location.address}</p>

                  <span>{location.hours}</span>
                </div>

                <button>
                  →
                </button>

              </div>

            ))}

          </div>

        </section>

        <section className="locations-cta">

          <h2>
            Your Coffee
            <br />
            Is Waiting.
          </h2>

          <p>
            Find a Tims near you and come say hello.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   CAREERS PAGE
========================================= */

function Careers() {
  const jobs = [
    {
      title: "Team Member",
      type: "FULL TIME / PART TIME",
      icon: "☕",
    },
    {
      title: "Restaurant Manager",
      type: "FULL TIME",
      icon: "👨‍💼",
    },
    {
      title: "Corporate Opportunities",
      type: "FULL TIME",
      icon: "💼",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="careers-page">

        <section className="careers-hero">

          <div>

            <p>JOIN THE TEAM</p>

            <h1>
              Make A Difference.
              <br />
              <span>One Cup At A Time.</span>
            </h1>

            <p>
              Build your career with a team that believes
              in people, community and great coffee.
            </p>

          </div>

          <div className="careers-main-circle">
            ☕
          </div>

        </section>

        <section className="career-opportunities">

          <div className="section-heading">

            <p>OPPORTUNITIES</p>

            <h2>
              Find Your
              <br />
              Place Here.
            </h2>

          </div>

          <div className="career-cards">

            {jobs.map((job, index) => (

              <div
                className="career-card"
                key={index}
              >

                <div className="career-icon">
                  {job.icon}
                </div>

                <p>{job.type}</p>

                <h3>
                  {job.title}
                </h3>

                <button>
                  VIEW ROLE →
                </button>

              </div>

            ))}

          </div>

        </section>

        <section className="career-values">

          <div className="section-heading">

            <p>OUR CULTURE</p>

            <h2>
              Come As You Are.
              <br />
              Grow With Us.
            </h2>

          </div>

          <div className="career-value-grid">

            <div className="career-value">
              <span>🤝</span>
              <h3>Teamwork</h3>
              <p>
                We support each other and grow together.
              </p>
            </div>

            <div className="career-value">
              <span>🌱</span>
              <h3>Growth</h3>
              <p>
                Learn new skills and build your future.
              </p>
            </div>

            <div className="career-value">
              <span>❤️</span>
              <h3>Community</h3>
              <p>
                Be part of something bigger than yourself.
              </p>
            </div>

          </div>

        </section>

        <section className="careers-cta">

          <h2>
            Ready To Join
            <br />
            The Team?
          </h2>

          <button className="primary-cta">
            VIEW ALL JOBS →
          </button>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   CONTACT PAGE
========================================= */

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        <section className="contact-hero">

          <p>GET IN TOUCH</p>

          <h1>
            We'd Love To
            <br />
            <span>Hear From You.</span>
          </h1>

          <div className="contact-main-icon">
            💌
          </div>

        </section>

        <section className="contact-section">

          <div className="contact-info">

            <div className="contact-info-card">

              <span>📧</span>

              <h3>Email Us</h3>

              <p>
                hello@timhortonsclone.com
              </p>

            </div>

            <div className="contact-info-card">

              <span>📞</span>

              <h3>Call Us</h3>

              <p>
                +91 1800 000 000
              </p>

            </div>

            <div className="contact-info-card">

              <span>📍</span>

              <h3>Visit Us</h3>

              <p>
                Ahmedabad, Gujarat
              </p>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            <h2>
              Send Us A Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message"
            ></textarea>

            <button
              type="submit"
              className="primary-cta"
            >
              SEND MESSAGE →
            </button>

          </form>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   FAQ PAGE
========================================= */

function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our menu, add your favourite items to your cart and proceed to checkout.",
    },
    {
      question: "Can I order for delivery?",
      answer:
        "Yes. Select Delivery during checkout and enter your delivery address.",
    },
    {
      question: "Can I choose pickup instead?",
      answer:
        "Yes. Select Pickup during checkout and complete your order.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "You can select Cash on Delivery, UPI or Credit / Debit Card.",
    },
    {
      question: "Can I change my order?",
      answer:
        "Orders can only be changed before they are submitted.",
    },
    {
      question: "How can I contact Tim Hortons?",
      answer:
        "Visit our Contact Us page to find our available contact options.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="faq-page">

        <section className="faq-hero">

          <p>NEED SOME HELP?</p>

          <h1>
            Frequently Asked
            <br />
            <span>Questions.</span>
          </h1>

          <div className="faq-hero-icon">
            ❓
          </div>

        </section>

        <section className="faq-section">

          <div className="faq-list">

            {faqs.map((faq, index) => (

              <details
                className="faq-item"
                key={index}
              >

                <summary>
                  <span>
                    {faq.question}
                  </span>

                  <strong>
                    +
                  </strong>
                </summary>

                <p>
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </section>

        <section className="faq-cta">

          <h2>
            Still Have
            <br />
            Questions?
          </h2>

          <Link to="/contact">
            CONTACT US →
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================
   APP ROUTES
========================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN / SIGN UP
            This is the ONLY public page */}
        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* HOME */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* MENU */}
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        />

        {/* FULL MENU */}
        <Route
          path="/full-menu"
          element={
            <ProtectedRoute>
              <FullMenu />
            </ProtectedRoute>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* FRANCHISING */}
        <Route
          path="/franchising"
          element={
            <ProtectedRoute>
              <Franchising />
            </ProtectedRoute>
          }
        />

        {/* CATERING */}
        <Route
          path="/catering"
          element={
            <ProtectedRoute>
              <Catering />
            </ProtectedRoute>
          }
        />

        {/* OUR STORY */}
        <Route
          path="/story"
          element={
            <ProtectedRoute>
              <OurStory />
            </ProtectedRoute>
          }
        />

        {/* LOCATIONS */}
        <Route
          path="/locations"
          element={
            <ProtectedRoute>
              <Locations />
            </ProtectedRoute>
          }
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={
            <ProtectedRoute>
              <Careers />
            </ProtectedRoute>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* FAQ */}
        <Route
          path="/faq"
          element={
            <ProtectedRoute>
              <FAQ />
            </ProtectedRoute>
          }
        />

        {/* UNKNOWN URL */}
        <Route
          path="*"
          element={<Navigate to="/auth" replace />}
        />

        <Route
  path="/my-orders"
  element={
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  }
/>










      </Routes>

    </BrowserRouter>
  );
}

export default App;