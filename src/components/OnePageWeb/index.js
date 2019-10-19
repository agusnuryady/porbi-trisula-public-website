import React, { Component, useState, useCallback } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./index.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaMapMarker,
  FaPhone,
  FaHome,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Gallerys from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import img4 from "../img/eventwp.jpg";
import img5 from "../img/trisula.png";
import Icon from "../../components/img/trisula_icon.png";
import img1 from "../img/wp1.jpg";
import img2 from "../img/wp2.jpg";
import img3 from "../img/wp3.jpg";
import logo from "../img/trisula.png";

const classNames = ["wp1", "wp2", "wp3"];

const headerSlide = [
  {
    className: "wp1",
    tittle: "1"
  },
  {
    className: "wp2",
    tittle: "1"
  },
  {
    className: "wp3",
    tittle: "1"
  }
];

const eventData = [
  {
    image: img1,
    title: "Lorem Ipsum Rohot",
    date: "28 September 2019",
    id: 1
  },
  {
    image: img2,
    title: "Kasoz Laiea Nalaas Ayosa palas janka",
    date: "2 Juli 2019",
    id: 2
  },
  {
    image: img3,
    title: "opas qoxa amoq neksa",
    date: "19 April 2019",
    id: 3
  }
];

const photos = [
  {
    src: img1,
    width: 1,
    height: 0.7
  },
  {
    src: img2,
    width: 1,
    height: 0.7
  },
  {
    src: img3,
    width: 1,
    height: 0.7
  },
  {
    src: img5,
    width: 1,
    height: 1
  },
  {
    src: img3,
    width: 1.3,
    height: 0.8
  },
  {
    src: img5,
    width: 1,
    height: 1
  },
  {
    src: img1,
    width: 1,
    height: 0.7
  },
  {
    src: img2,
    width: 1,
    height: 0.7
  }
];

function GalleryApp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallerys photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

class OnePage extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
    this.navbarScrolled();
  };

  navbarScrolled() {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $(".navbarBox").addClass("solid");
          $(".login").addClass("solid");
        } else {
          $(".navbarBox").removeClass("solid");
          $(".login").removeClass("solid");
        }
      });
    });
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex });
  };

  handleOnClick(id) {
    this.props.history.push(`/MyProfile/${id}`);
  }

  render() {
    const index = this.state.index % classNames.length;
    return (
      <div className="main-container">
        <nav className="Navbar navbarBox">
          <Link exact to="/Home" spy={true} smooth={true} duration={500}>
            <img src={Icon} alt="Probi Trisula Logo" className="navLogo" />
          </Link>
          <ul className="nav-opt">
            <li className="navli">
              <Link
                activeClassName="selected"
                className="nav-link"
                to="/Home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a className="navText">Beranda</a>
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClassName="selected"
                className="nav-link"
                to="/Kegiatan"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a className="navText">Kegiatan</a>
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClassName="selected"
                className="nav-link"
                to="/Visi"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a className="navText">Visi & Misi</a>
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClassName="selected"
                className="nav-link"
                to="/Gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a className="navText">Gallery</a>
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClassName="selected"
                className="nav-link"
                to="/HubungiKami"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a className="navText">Hubungi Kami</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Element name="/Home" className="headerBox1">
            <Slider
              autoplay={10000}
              nextButton={null}
              previousButton={null}
              className="sliderCustom"
            >
              {headerSlide.map((item, index) => (
                <div key={index} className={item.className}></div>
              ))}
            </Slider>
            <div className="headerItem">
              <div className="headerCardBox">
                <p className="headerText2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently.
                </p>
              </div>
            </div>
          </Element>
          <div className="contentBox">
            <Element name="/Kegiatan" className="elementNav" />
            <div className="headerBox">
              <h1 className="headerText1">Kegiatan</h1>
              <div className="gridLine1" />
            </div>
            <div className="contentItemActivity1">
              <div className="activityBox">
                <img src={img1} className="activityImg1" />
                <p className="textContent1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="activityBox">
                <img src={img3} className="activityImg1" />
                <p className="textContent1">
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </div>
              <div className="activityBox">
                <img src={img2} className="activityImg1" />
                <p className="textContent1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div>
            </div>
            <div className="contentItemActivity2">
              <Element name="/Visi" className="elementNav" />
              <div className="visionBox1">
                <h1 className="headerText3">Visi</h1>
                <p className="headerText2">
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s."
                </p>
              </div>
              <div className="visionBox2">
                <h1 className="headerText3">Misi</h1>
                <div className="headerText2">
                  <p className="visionText1">
                    1. Lorem Ipsum is simply dummy text of the printing
                  </p>
                  <p className="visionText1">
                    2. Minim veniam quis nostrud exercitation ullamco
                  </p>
                  <p className="visionText1">
                    3. Lunt in culpa qui officia deserunt mollit anim id est
                  </p>
                  <p className="visionText1">
                    4. Dolor in reprehenderit in voluptate velit
                  </p>
                </div>
              </div>
            </div>
            <div className="contentItemActivity3">
              <Element name="/Gallery" className="elementNav" />
              <div className="headerBox">
                <h1 className="headerText1">Gelleri</h1>
                <div className="gridLine1" />
              </div>
              <div className="galleryBox">
                <div className="galleryContentBox2">
                  <div className="galleryBoxItems2">
                    <GalleryApp />
                  </div>
                </div>
              </div>
            </div>
            <div className="contentItemActivity3">
              <Element name="/HubungiKami" className="elementNav" />
              <div className="headerBox">
                <h1 className="headerText1">Hubungi Kami</h1>
                <div className="gridLine1" />
              </div>
              <div className="aboutBox1">
                <div className="aboutBox2">
                  <div className="aboutTextBox1">
                    <p className="aboutTextHeader1">Kontak Kami</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaHome className="aboutIcon1" />
                    <p className="aboutText1">
                      Jl. Kampung Duri Semanan RT 3/2 no.254 Kalideres - Jakarta
                      Barat
                    </p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaPhone className="aboutIcon1" />
                    <p className="aboutText1">021-822-1822-0822(Admin)</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaWhatsapp className="aboutIcon1" />
                    <p className="aboutText1">0822-1622-0822(Admin)</p>
                  </div>
                  <div className="aboutTextBox1">
                    <IoMdMail className="aboutIcon1" />
                    <p className="aboutText1">trisulabinabangsa@gmail.co.id</p>
                  </div>
                </div>
                <div className="aboutBox2">
                  <div className="aboutTextBox1">
                    <p className="aboutTextHeader1">Ikuti Kami</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaFacebook className="aboutIcon1" />
                    <p className="aboutText1">Yayasan Trisula Bina Bangsa</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaInstagram className="aboutIcon1" />
                    <p className="aboutText1">@trisulabinabangsa</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaYoutube className="aboutIcon1" />
                    <p className="aboutText1">Yayasan Trisula Bina Bangsa</p>
                  </div>
                  <div className="aboutTextBox1">
                    <FaLinkedin className="aboutIcon1" />
                    <p className="aboutText1">@trisulabinabangsa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutBox3">
              <div className="aboutTextBox1">
                <p className="aboutTextHeader1">Support Kami</p>
              </div>
              <div className="aboutTextBox1">
                <p className="aboutText1">
                  Dukung program dan kegiatan sosial kami dengan mendonasikan
                  sebagian rizki anda di rekening dan dompet digital resmi kami
                  dibawah ini :
                </p>
              </div>
              <div className="aboutTextBox1">
                <p className="aboutText2">Bank BCA</p>
                <p className="aboutText3">:</p>
                <p className="aboutText1">11801-23090</p>
              </div>
              <div className="aboutTextBox1">
                <p className="aboutText2">Bank Mandiri</p>
                <p className="aboutText3">:</p>
                <p className="aboutText1">52343-23090</p>
              </div>
              <div className="aboutTextBox1">
                <p className="aboutText2">Bank BRI</p>
                <p className="aboutText3">:</p>
                <p className="aboutText1">91843-23090</p>
              </div>
              <div className="aboutTextBox1">
                <p className="aboutText2">Bank Mega</p>
                <p className="aboutText3">:</p>
                <p className="aboutText1">29104-23090</p>
              </div>
            </div>
            <div className="aboutBox1">
              <div className="aboutBox4"></div>
            </div>
          </div>
        </div>
        <div className="footerBox">
          <div className="footerItem1">
            <div className="footerContent1">
              <img src={logo} className="footerLogo" />
              <p className="footerText1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                mattis sit amet enim quis venenatis. Pellentesque finibus sed
                tortor ultricies pharetra. Donec eget congue ex. Mauris
                ultricies dui ornare, sagittis turpis vel, condimentum mi.
              </p>
              <div className="footerIconBox">
                <FaInstagram className="footerIcons" />
                <FaFacebook className="footerIcons" />
                <FaTwitter className="footerIcons" />
                <FaYoutube className="footerIcons" />
              </div>
            </div>
            <div className="footerContent2">
              <h2 className="footerText2">CONTACT US</h2>
              <div className="footerContactBox">
                <FaMapMarker className="footerIcons" />
                <p className="footerText3">
                  11850 Duri Semanan, Kalideres, West Jakarta
                </p>
              </div>
              <div className="footerContactBox">
                <FaPhone className="footerIcons" />
                <p className="footerText3">+62-822-1622-0822</p>
              </div>
              <div className="footerContactBox">
                <IoMdMail className="footerIcons" />
                <p className="footerText3">porbi.trisula@example.co.id</p>
              </div>
            </div>
            <div className="footerContent3">
              <h2 className="footerText2">SITEMAP</h2>
              <NavLink
                activeClassName="selected"
                className="footerText3"
                to="/Event"
              >
                Event
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="footerText3"
                to="/Kegiatan"
              >
                Kegiatan
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="footerText3"
                to="/Gallery"
              >
                Gallery
              </NavLink>
              {/* <NavLink activeClassName="selected" className="footerText3" to="/MyProfile">My Profile</NavLink> */}
              <NavLink
                activeClassName="selected"
                className="footerText3"
                to="/AboutUs"
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="footerItem2">
            <h5 className="footerText">
              @PORBI TRISULA 2019 ALL RIGHTS RESERVED, Created By @agusnuryady
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePage;
