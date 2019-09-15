import React, {Component} from 'react';
import './index.css';
import {Redirect} from 'react-router-dom'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import img1 from '../img/wp1.jpg'
import img2 from '../img/wp2.jpg'
import img3 from '../img/wp3.jpg'
import logo from '../img/trisula.png'

const classNames = [
  "wp1",
  "wp2",
  "wp3",
]

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
]

const eventData = [
  {
    image: img1,
    title: "Lorem Ipsum Rohot",
    date: "28 September 2019",
    id: 1,
  },
  {
    image: img2,
    title: "Kasoz Laiea Nalaas Ayosa palas janka",
    date: "2 Juli 2019",
    id: 2,
  },
  {
    image: img3,
    title: "opas qoxa amoq neksa",
    date: "19 April 2019",
    id: 3,
  },
]

class Home extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      index: 0,
    }
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }

  handleOnClick(id) {
    this.props.history.push(`/MyProfile/${id}`)
  }
  
  render(){
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
      <div className="content" >
        <div className="headerBox1" >
          <Slider
            autoplay={10000}
            nextButton={null}
            previousButton={null}
          >
            {headerSlide.map((item, index) => (
              <div 
                key={index}
                className={item.className} >

              </div>
            ))}
          </Slider>
          <div className="headerItem" >
            <h1 className="headerText1" >
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h1>
            <p className="headerText2" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus eros mattis, lacinia erat et, dapibus augue. Mauris euismod velit mi, nec egestas eros iaculis ut.
            </p>
            <div className="headerCardBox" >
              <div className="headerCardItem1" >
                <h3 className="headerCardText" >
                  nisi augue facilisis
                </h3>
              </div>
              <div className="headerCardItem2" >
                <h3 className="headerCardText" >
                  nisi augue facilisis
                </h3>
              </div>
              <div className="headerCardItem3" >
                <h3 className="headerCardText" >
                  nisi augue facilisis
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="contentBox">
          <div className="contentItem1">
            <div className="eventBox">
              <div className="eventHeader">
                <h2>
                  Last Event
                </h2>
                <div className="eventButton" >
                    <FaAngleLeft
                      // onClick={() => alert('clicked')}
                      className="eventNavBtn"
                    />
                    <FaAngleRight
                      // onClick={() => alert('clicked')}
                      className="eventNavBtn"
                    />
                </div>
              </div>
              <div className="eventContent" >
                {eventData.map((item, index) => (
                  <div
                    key={index}
                    onClick={()=> this.handleOnClick(item.id)}
                    className="eventItems" >
                    <img src={item.image} className="eventImg" />
                    <div className="eventText" >
                      <h3 className="eventTitle" >
                        {item.title}
                      </h3>
                      <p className="eventDate" >
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="activityBox" >
              <div className="activityItem1" >
                <div className="activityEffect"/>
                <h2 className="activityText1" >
                  Duis ante lacus rutrum nec tellus quis
                </h2>
                <p className="activityText2" >
                  Praesent ac sapien eget sapien feugiat malesuada a a nibh.
                </p>
              </div>
              <div className="activityItem2" >
                <div className="activitySubItem1" >
                  <div className="activityEffect"/>
                  <h2 className="activityText3" >
                    Donec ultrices arcu ne
                  </h2>
                  <p className="activityText4" >
                    tellus eget mollis rutrum
                  </p>
                </div>
                <div className="activitySubItem2" >
                  <div className="activityEffect"/>
                  <h2 className="activityText3" >
                    vel placerat urna
                  </h2>
                  <p className="activityText4" >
                    sagittis congue velit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contentItem2" >
            <div className="galleryBox" >
              <div className="galleryItem1" >
                  <div className="activityEffect"/>
                  <h2 className="galleryText1" >
                    Sed semper, tellus eget mollis rutrum
                  </h2>
                  <p className="galleryText2" >
                    tellus eget mollis rutrum
                  </p>
                  <button className="galleryButton" >
                    Read More
                  </button>
              </div>
              <div className="galleryItem2" >
                <div className="galleryItem3" >
                  <div className="galleryItem4" >
                    <div className="activityEffect"/>
                    <h2 className="galleryText3" >
                      pulvinar massa tellus
                    </h2>
                  </div>
                  <div className="galleryItem5" >
                    <div className="activityEffect"/>
                    <h2 className="galleryText3" >
                      vitae enim semper lacinia est quis
                    </h2>
                  </div>
                </div>
                <div className="galleryItem3" >
                  <div className="galleryItem5" >
                    <div className="activityEffect"/>
                    <h2 className="galleryText3" >
                      non pulvinar est pellentesque
                    </h2>
                  </div>
                  <div className="galleryItem4" >
                    <div className="activityEffect"/>
                    <h2 className="galleryText3" >
                      rutrum nec tellus quis
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contentItem2" >
            <div className="aboutBox" >
              <div className="aboutItem1" >
                <img src={logo} className="aboutImage" />
              </div>
              <div className="aboutItem2" >
                <h1 className="aboutText1" >PORBI TRISULA</h1>
                <p className="aboutText2" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis augue sed ante ultrices tempor. Sed purus justo, euismod sit amet lorem ut, pulvinar efficitur augue. Pellentesque tristique, lorem maximus ultrices euismod, massa dolor tempor magna, sed pretium augue felis a nibh. Mauris euismod mauris a massa rutrum, quis tempor sem bibendum. Nunc sollicitudin nisi venenatis velit tempus fringilla. Mauris pellentesque, justo nec consequat dignissim, ante orci elementum neque, et luctus eros lorem at lacus. Nullam tellus ligula, vehicula nec quam ut, semper lobortis nisl.
                </p>
                <button className="galleryButton" >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
