import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Card, Figure, Container, Carousel } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import ClientCarousel from './ClientCarousel';
import bannerImg from '../images/84.jpg'
import checkMark from '../images/check-mark.svg';
import editor from '../images/editor.svg';
import envelope from '../images/envelope.svg';
import logo from '../images/logo.png';
import Footer from './Footer';
import './Main.css'
import ProjectCarousel from './ProjectCarousel';
import carousel1 from '../images/1.jpg'
import card from '../images/2.jpg'
import model from '../images/3.jpg'


const Main = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState(itemData);

  useEffect(() => {
    console.log('main page rendering')
  }, [])

  return (
    <>
      {/* <!-- ==============Main Banner=========== --> */}

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Pioneers of Solar and Renewable Energy</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Pioneers of Solar and Renewable Energy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={model}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Pioneers of Solar and Renewable Energy</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      {/* <!-- =======================Main banner --> */}



      {/* <!-- =======================about us  --> */}
      <section>
        <div className="container my-5">
          <Row>
            <div className="col-md-8 mx-auto text-center mb-5">
              <h2 className="h1 font-weight-bold">Explore to the World of Aspiration</h2>
              <h5>Know how we are trasforming the ecosystem for the Organization and Investors</h5>
            </div>
          </Row>
          <Row>
          <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">

      <div class="card-body text-center">
      <div className="-icon"/><img className="w-25 " src={checkMark} alt="" />
        <h5 class="card-title">Organization</h5>
        <p class="card-text">Get 100% uninterrupted Power Supply at much less cost per month than
                  from the conventional sources with Zero Setup Cost for first 25 years. Then with Zero cost
                  and the Solar Plant is yours.</p>
      </div>
      <div class="card-footer">
      <a className=" btn btn-sm btn-info text-white mb-0">Know More </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
   
      <div class="card-body text-center">
      <div className="-icon"/><img className="w-25" src={editor} alt="" />
        <h5 class="card-title">Investors</h5>
        <p class="card-text">Invest Directly in Solar and get monthly return. Get atleast 5 times
                  in next 25 years..</p>

      </div>
      <div class="card-footer">
                      <a  className=" btn btn-sm btn-info text-white mb-0">Know More </a><br></br>
      </div>
    </div>
  </div><br></br>
  <div class="col">
    <div class="card h-100">
      <div class="card-body text-center">
      <div className="-icon"/><img className="w-25" src={envelope} alt="" />

        <h5 class="card-title">Nature</h5>
        <p class="card-text">Since we deal in green energy, we help in carbon footprint reduction
                  of the Earth by 15%, co2 emission reduction, increase cool effect and make nature better and
                  beautiful place for all of us.</p>
      </div>
      <div class="card-footer">
      <a className=" btn btn-sm btn-info text-white mb-0">Know More </a>
      </div>
    </div>
  </div>
</div>
           
          </Row>
        
          
         
        </div>
      </section>
      {/* <!-- =======================service  --> */}



      {/* <!-- =======================newsletter --> */}
      <section className="portfolio bg-light my-5">
        <div className="container">

          {/* <ProjectCarousel /> */}
          {/* <ClientCarousel />  */}

        </div>

      </section>
      {/* <!-- =======================	Portfolio --> */}







      {/* <!-- =======================	call to action--> */}
     
      {/* <!-- =======================	call to action--> */}
      
      <div className='bg-white'>
      <Container className='py-5'>
          <Row className=' align-items-center' md={2}>
            <Col>
            <h4 className='text-success'>Why Choose Us!</h4>
<h2>Complete Commercial & Residential Solar Systems</h2>
<p>Good We provides a solution to generate clean electricity for your own solar-powered home. When it comes to residential solutions featuring superior safety and easy installation, GoodWe is the ideal choice for homeowners to going solar. Enjoy your unparalleled experience of green energy, optimal solar energy usage, reduced electricity bills and much more.  


Exploring and utilizing smart technologies and advanced expertise, Goodwe is relentless about offering users residential & small C&I storage solutions to protect users from rising electricity costs. We strive to create reliable solutions for users to maximize self-consumption, ensure power safety during an outage, take smart control of home power management, and realize energy independence.


</p>
            </Col>
            <Col>
            <img className='img-fluid' src={model} />
           
            </Col>
          </Row>
          </Container>
          </div>
          <section className="py-5">
        <div className="container">
            <Col md={8} className="mx-auto text-center mb-5">
              <h2 className="h1 font-weight-bold">Success Story</h2>
              <h5 class="highlight">12 + Clients across India and counting... </h5>
            </Col> 
              <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-center mt-5">
              <h6>We have a strong foundation built on legacy and emerging technologies, including excellent track
                record of on-time deliveries.</h6>
              <a className="btn btn-dark" >View all services</a>
            </div>
          </div> 
          <div className='text-center py-3'>
            
              <h4 className="m-0 mb-3">Lets Start a new Project together!</h4>
          
              <a className="btn btn-outline-success mb-0" onClick={()=>{ navigate('/query') }} >Let's Discuss </a>
            
            </div>
        </div>
      </section>


      {/* <!-- =======================	footer  --> */}
      <footer className="footer bg-light mt-5 pt-5">
        <div className="footer-content pb-3">
          <div className="container">
            <Row >
              {/* <!-- Footer widget 1 --> */}
              <Col className="col-md-4">
                <div className="widget">
                  <a className="footer-logo">
                    <img src={logo} style={{ height: "55px" }} />
                  </a>
                  <p className="mt-3">Reclair is a .</p>
                  <p>It is based on the powerful Bootstrap 4 Framework to make sure an entirely responsive
                    layout. </p>
                </div>
              </Col>
              {/* <!-- Footer widget 2 --> */}
              <div className="col-md-3 col-sm-6">
                <div className="widget address"
                  style={{
                    // background-image: url('assets/images/world-map.png');
                    backgroundPosition: '50% 20px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'
                  }}>
                  <ul className="list-unstyled">
                    <li className="media mb-3"><i className="mr-3 display-8 ti-map-alt"></i>1421 Coburn Hollow Road
                      Metamora, Near Center Point, IL 61548. </li>
                    <li className="media mb-3"><i className="mr-3 display-8 ti-headphone-alt"></i> (251) 854-6308
                    </li>
                    <li className="media mb-3"><i className="mr-3 display-8 ti-email"></i> help@wizixo.com</li>
                    <li className="media mb-3"><i className="mr-3 display-8 ti-time"></i>
                      <p>Mon - Fri: <strong>09:00 - 21:00</strong> <br />Sat & Sun: <strong>Closed</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Footer widget 3 --> */}
              <div className="col-md-5 col-sm-6">
                <div className="widget">
                  <h6>Quick LInks</h6>
                  <ul className="nav flex-column primary-hover">
                    <li className="nav-item"><a className="nav-link" >Contactsss</a></li>
                    <li className="nav-item"><a className="nav-link" >About</a></li>
                    <li className="nav-item"><a className="nav-link" >Home</a></li>
                    <li className="nav-item"><a className="nav-link" >Blog</a>
                    </li>
                    <li className="nav-item"><a className="nav-link"
                      >Portfolio</a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- Footer widget 4 --> */}
              
            </Row>
            {/* <!-- Footer widget 4 --> */}
          </div>
        </div>
        <div className="divider mt-3"></div>

      </footer>



      {/* <ClientCarousel /> */}

    </>
  )
}

export default Main;


const itemData = [
  {
    id: 1,
    img: 'https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg',
    title: 'How sensors provide solar power plants better access to measurement data',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: false
  },
  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/PV_Soundless_Freising.jpg',
    title: "New solar power plant delivers clean energy in Hungary-Projects - Regional Policy - European Commission",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
  {
    id: 3,
    img: 'https://m.economictimes.com/thumb/msid-69198850,width-1200,height-900,resizemode-4,imgsize-603299/how-to-build-a-commercial-solar-power-plant-in-india.jpg',
    title: 'NTPC taps solar power with floating plant',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: false
  },
  {
    id: 4,
    img: 'https://www.getbengal.com/uploads/story_image/Sagardighi-floating-power-plant.jpg',
    title: 'Floating solar power project inaugurated',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true

  },
  {
    id: 5,
    img: 'https://www.intersolarsystems.com/wp-content/uploads/2018/12/Cost-of-solar-panels-in-India.jpg',
    title: 'Kalyon inks $812M deal for Turkey’s largest solar energy plant  ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
  {
    id: 6,
    img: 'https://balkangreenenergynews.com/wp-content/uploads/2021/05/hydropower-plants-vrbas-solar-power-plants-ers.jpg',
    title: 'Solar Power Plant: Types, Technologies & All About Solar Power System',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
  {
    id: 7,
    img: 'https://4.imimg.com/data4/JD/XL/MY-1106662/solar-power-plant-500x500.jpg',
    title: 'Solar PV and PV Power Plants introductory training course 2 days',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
  {
    id: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ia6MrNiL3W9ewpV6-pHep80znEadaWFdVg&usqp=CAU',
    title: "Oil India Limited Issues EoI for 100 MW Solar Plant",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: false
  },
  {
    id: 9,
    img: 'https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/default-album/solar-power.jpg?sfvrsn=e3b1c112_0',
    title: 'Solar Power Plant – Types, Components, Layout and Operation',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: false
  },
  {
    id: 10,
    img: 'https://www.tuv.com/content-media-files/master-content/services/products/1623-tuv-rheinland-warranty-inspection-services-for-solar-power-plants/tuv-rheinland-warranty-inspection-shutterstock_1614874936_core_2_2_1.jpg',
    title: 'solar power plant is also known as the Photovoltaic (PV) power plant.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
  {
    id: 11,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHNvOjLV-4ndEbfvv-tVBEh2TpJocoTcv9lRM5dJvvKSkqHTyqWcv0CrdozQVg2Ghf_U&usqp=CAU',
    title: "Solar Plant Aims to be ‘Benchmark of Excellence’",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: false
  },
  {
    id: 12,
    img: 'https://ec.europa.eu/regional_policy/rest/projects/upload/4126.jpg',
    title: 'NTPC taps solar power with floating plant',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isppadone: true
  },
];