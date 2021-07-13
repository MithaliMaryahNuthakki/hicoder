import './App.css';
import { Button,Navbar,Nav,NavDropdown,Card,CardDeck,Image,Carousel,Jumbotron} from 'react-bootstrap';
import React, { useState } from "react";


import logo from './components/images/logo.png';
import jumbotron from './components/images/jumbotron.jpg';
import pic1 from './components/images/picture1.jpg';
import nav from './components/images/navbaricon.png';
import pic2 from './components/images/picture2.jpg';
import pic3 from './components/images/picture3.jpg';
import pic4 from './components/images/picture4.jpg';
import pic5 from './components/images/picture5.jpg';
import i1 from './components/images/icons/icon1.png';
import i2 from './components/images/icons/icon2.png';
import quotes from './components/images/quotes.png';
import part1 from './components/images/partners/part1.jpg';
import part2 from './components/images/partners/part2.jpg';
import part3 from './components/images/partners/part3.jpg';
import part4 from './components/images/partners/part4.jpg';
import bc1 from './components/images/cards/bigcard1.jpg';
import bc2 from './components/images/cards/bigcard2.jpg';
import bc3 from './components/images/cards/bigcard3.jpg';
import bclogo from './components/images/cards/logo.png';
import card1 from './components/images/cards/card1.png';
import card2 from './components/images/cards/card2.png';
import card3 from './components/images/cards/card3.png';
import card4 from './components/images/cards/card4.png';
import card5 from './components/images/cards/card5.png';
import card6 from './components/images/cards/card6.png';
import card7 from './components/images/cards/card7.png';
import card8 from './components/images/cards/card8.png';
import tes1 from './components/images/testimonals/tes1.jpg';
import tes2 from './components/images/testimonals/tes2.jpg';
import tes3 from './components/images/testimonals/tes3.jpg';
import curl1 from './components/images/curly/curl1.png';
import curl2 from './components/images/curly/curl2.png';
import curl3 from './components/images/curly/curl3.png';
import curl4 from './components/images/curly/curl4.png';
import fi1 from './components/images/footer/ficon1.png';
import fi2 from './components/images/footer/ficon2.png';
import fi3 from './components/images/footer/ficon3.png';
import fi4 from './components/images/footer/ficon4.png';
import fb from './components/images/socials/fb.png';
import insta from './components/images/socials/insta.png';
import twitter from './components/images/socials/twitter.png';
import linked from './components/images/socials/linked.png';
import { findByLabelText } from '@testing-library/react';


function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App">
      <div style={{backgroundColor:'#1c3988',padding:'10px',paddingLeft:'140px',paddingRight:'140px',marginTop:'none', clear:'both' }}>
        <text style={{color:'white', fontSize:'16px'}}><img src={fi3} width='20px' style={{filter: 'brightness(0) invert(1)'}}/>  admission@hicoder.in <img src={fi2} width='20px' style={{filter: 'brightness(0) invert(1)'}}/> (+91) 9206 980 980</text>
        <text style={{color:'white', fontSize:'16px',float:'right'}}><img src={fi4} width='15px' style={{filter: 'brightness(0) invert(1)'}}/>  Mon - Fri: 10:00am - 06.00pm
          <img
              src={fb}
              width='40px'
              style={{filter: 'brightness(0) invert(1)',paddingLeft:'20px'}}
            />
            <img
              src={insta}
              width='40px'
              style={{filter: 'brightness(0) invert(1)',paddingLeft:'20px'}}
            />
            <img
              src={twitter}
              width='40px'
              style={{filter: 'brightness(0) invert(1)',paddingLeft:'20px'}}
            />
            <img
              src={linked}
              width='40px'
              style={{filter: 'brightness(0) invert(1)', paddingLeft:'20px'}}
            />
          
        </text>
      </div>
      <Navbar bg="light" expand="lg" sticky="top" style={{clear:'both'}}>
        <Nav style={{marginLeft:'10%'}} >
        <Navbar.Brand href="#home">
        <img
        src={logo}    
        width='200px'    
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
      </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar-nav ml-auto" style={{marginRight:'10%'}}>
          <NavDropdown  title="HICODER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>         
            </NavDropdown>
            <NavDropdown title="COURSE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">What you learn?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">How to apply?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fee Structure</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Apply</NavDropdown.Item>           
            </NavDropdown>
            <NavDropdown title="HIRE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>                            
            </NavDropdown>
            <Button style={{backgroundColor:'#1c3988',marginLeft:'20px',margin:'20px',paddingLeft:'20px',paddingRight:'20px',border:'none',fontWeight:'500',borderRadius:'0px'}}>APPLY NOW</Button>
            <img
              src={nav}
              width='75px'
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className='jumbotron' style={{marginBottom: '0px'}}>    
        <div style={{padding:'8%',paddingLeft:'12%'}}>
          <h6 style={{color:'#1c3988'}}>YOUR TIME, OUR EFFORTS</h6>
          <h1 style={{fontWeight:'900',fontSize:"48px"}}>Pay After Job Full Stack<br/> Development Course</h1>
          <p>
            <Button style={{marginTop:'10px',color:'#1c3988',width:'200px',padding:'15px',fontWeight:'bold',fontSize:'20px',border: '2px solid #1c3988'}} variant="outline-primary">Know more</Button>
          </p>
        </div>    
      </Jumbotron>
      <div style={{backgroundColor:'#1c3988',paddingTop:'40px',paddingBottom:'40px',paddingLeft:'10%',marginTop:'none' }}>
        <text style={{color:'white', fontSize:'20px'}}><span style={{fontSize:'23px'}}>NEXT BATCH:  27 July |</span> Apply Now</text>
      </div>
      <div style={{width: 'fit-content', paddingLeft:'10%',paddingTop:'5%',clear:'both'}}>
        <div style={{width: '45%',float:'left'}}>
        <img
        src={pic1}
        width='100%'
        height="500px"
        />
        </div>
        <div style={{padding:'6%',width: '50%',float:'left'}} >
        <span style={{color:'gray',fontWeight:'700'}}>HICODER</span>
        <h1 style={{fontWeight:'700'}}>We help students learn</h1>
        <h1 style={{fontWeight:'700',color:'#1c3988'}}>Full Stack Development.</h1>
        <p style={{textAlign:'justify'}}>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
        </div>
      </div>
      <div style={{width: 'fit-content', paddingLeft:'10%',paddingTop:'10%',clear:'both'}}>
        <div style={{ paddingRight:'5%',width: '45%',float:'left'}}>
        <h1 style={{fontWeight:'700'}}>Trained on the most in-demand Technology Skills</h1>
        <p style={{textAlign:'justify'}}>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>
        <ul>
          <li>End to End Project Analysis, Design & Development</li>
          <li>Authentication, Geo Tracking, Payment Gateway</li>
          <li>Analytics, SEO, Data Representation, Industry Standards</li>
          <li>Max Pro Resume, Soft Skills, Client Expectation Management</li>
        </ul>
        <Button style={{backgroundColor:'#1c3988',marginLeft:'20px',margin:'20px',paddingLeft:'20px',paddingRight:'20px',border:'none',fontWeight:'500',borderRadius:'0px'}}>APPLY NOW</Button>
      </div>
        <div style={{paddingTop:'6%',width: '50%',float:'left'}} >
        <img
        src={pic2}
        width='80%'
        />
        </div>        
      </div>
      <div style={{clear:'both'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320">
        <path fill="#1d3a8a" fill-opacity="1" d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,101.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <image x="150" y="150" href={curl1} height="50" width="100"/>
        <text className='curly-numbers'x="185" y="230">34 +</text>
        <text className='curly-text'x="155" y="260">PROJECTS COMPLETED</text>
        <image x="350" y="150" href={curl2} height="50" width="100"/>
        <text className='curly-numbers' x="385" y="230">47 +</text>
        <text className='curly-text'x="355" y="260">INDUSTRY EXPERTS</text>
        <image x="550" y="150" href={curl3} height="50" width="100"/>
        <text className='curly-numbers' x="585" y="230">30 +</text>
        <text className='curly-text'x="555" y="260">QUALITY DEVELOPERS</text>
        <image x="750" y="150" href={curl4} height="50" width="100"/>
        <text className='curly-numbers' x="750" y="230">40,000,00 +</text>
        <text className='curly-text'x="755" y="260">APPLICATION USERS</text>
      </svg>
      </div>
      
      <div style={{width: 'fit-content', paddingLeft:'10%',paddingTop:'10%',clear:'both'}}>
        <div style={{ paddingRight:'2%',width: '40%',float:'left'}}>
        <h1 style={{fontWeight:'700'}}>Why HiCoder?</h1>
        <p style={{paddingRight:'15%'}}>HiCoder enables students to think about real-world problems, design, and develop the right solution.<a href='https://hicoder.in/syllabus'> know more</a></p>
        
        <div style={{width: 'fit-content',clear:'both',paddingTop:'20px'}}>
          <div style={{width: '20%',float:'left'}} >
            <img
            src={i1}
            width='70%'
            />
          </div>  
          <div style={{ paddingRight:'4%',width: '70%',float:'left'}}>
          <h3 style={{fontWeight:'700'}}>Production Projects</h3>
          <p style={{textAlign:'justify'}}>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</p>
          </div>          
        </div>
        <div style={{width: 'fit-content',clear:'both'}}>
          <div style={{width: '20%',float:'left'}} >
            <img
            src={i2}
            width='70%'
            />
          </div>  
          <div style={{ paddingRight:'4%',width: '70%',float:'left'}}>
          <h3 style={{fontWeight:'700'}}>Personalized Training</h3>
          <p style={{textAlign:'justify'}}>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</p>
          </div>          
        </div>
      </div>
        <div style={{width: '50%',float:'left'}} >
        <img
        src={pic3}
        width='80%'
        />
        </div>        
      </div>
      <div style={{width: 'fit-content', paddingLeft:'10%',paddingTop:'10%',clear:'both'}}>
        <div style={{width: '45%',float:'left'}}>
        <img
        src={pic4}
        width='90%'
        height="500px"
        />
        </div>
        <div style={{paddingTop:'6%', paddingLeft:'10px',width: '50%',float:'left',paddingRight:'8%'}} >
        <h1 style={{fontWeight:'700'}}>How does HiCoder help?</h1>
        <p style={{textAlign:'justify',color:'#58555e',fontWeight:'700',paddingTop:'20px'}}>
        HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.
        </p>
        <p style={{textAlign:'justify'}}>
        Hi Coder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.
        </p>
        <Button style={{backgroundColor:'#1c3988',marginLeft:'20px',margin:'20px',paddingLeft:'20px',paddingRight:'20px',border:'none',fontWeight:'500',borderRadius:'0px'}}>KNOW MORE</Button>  
        </div>
      </div>
      <div style={{clear:'both',textAlign:'center',paddingTop:'100px'}}>
        <p style={{color:'gray',fontWeight:'600'}}>WHAT YOU LEARN</p>
        <h1 style={{fontWeight:'700'}}>at HiCoder is useful</h1>
        <h1 style={{fontWeight:'700',color:'#1c3988'}}>Technology, Management & more</h1>       
      </div>
      <CardDeck style={{textAlign:'center',paddingLeft:'12%',paddingRight:'12%',paddingBottom:'20px',paddingTop:'50px'}}>
        <Card className="cards">
          <Card.Img variant="top" src={card1} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Front End</Card.Title>
            <Card.Text>
            Students learn to design, develope the UI following UX with industry standards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card2} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Back End</Card.Title>
            <Card.Text>
            Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card3} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Project Management</Card.Title>
            <Card.Text>
            Students learn to plan, project, and execute development projects with client expectation.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card4} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Production Deployment</Card.Title>
            <Card.Text>
            Students learn to create a server, deploy an application following security guidelines.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck style={{textAlign:'center',paddingLeft:'12%',paddingRight:'12%',paddingBottom:'10%'}}>
        <Card className="cards">
          <Card.Img variant="top" src={card5} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Basic Analytics</Card.Title>
            <Card.Text>
            Students learn about analytics, usability, and integration of analytics in their production application.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card6} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Soft Skills</Card.Title>
            <Card.Text>
            Soft skills encourages open communication & enhances corporate skills having corporate attitude.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card7} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Industry Standards</Card.Title>
            <Card.Text>
            Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards">
          <Card.Img variant="top" src={card8} style={{width:'65%',paddingTop:'10%',paddingLeft:'33%'}}/>
          <Card.Body>
            <Card.Title>Max Pro Resume</Card.Title>
            <Card.Text>
            Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <div style={{backgroundColor:'#f1f6fc',textAlign:'center',padding:'5%',overflow:'auto'}}>
        <h5 style={{color:'#1c3988'}}>THOUGHTS ON HICODER SYLLABUS</h5>
        <h1 style={{fontWeight:'700'}}>Reviews by Industry Experts</h1>
        <div style={{padding:'5%',width:'100%',clear:'both',marginRight:'none'}}>
          <div style={{width:'50%',float:'left'}}>
            <img
              src={pic5}
              width='100%'
              height='640px'
            />
          </div>
          <div style={{width:'50%',float:'left',height:'640px',marginLeft:'none',backgroundColor:'white',color:'black'}}>
            <Carousel className='carousel'  activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className="testimonial"> 
                <img
                  src={quotes}
                  alt="First slide"
                  style={{height:'60px',width:'50px',alignSelf:'center',marginTop:'60px',opacity:'0.2' }}
                />
                <div style={{padding:'5%',paddingLeft:'4%',paddingRight:'4%'}}>
                  <i style={{}}>HiCoder didn't exist 15 years ago when I was preparing for software engineering career. In 2002, I had to pay hefty to get basic technical training. Good to see that HiCoder is removing the barrier of high tuition fee and encouraging students towards product focused learning than just teaching specific programming language that generally gets outdated.</i>
                  <br/>
                  <img 
                    src={tes1}
                    className='testimonials-image'                    
                  />
                    
                  <h5>Ashish Vishwakarma</h5>
                  <span style={{color:'gray'}}>Software Engineer, Bosch</span>
               
                </div>
                
              </Carousel.Item>
              <Carousel.Item className="testimonial">
                <img
                  src={quotes}
                  alt="First slide"
                  style={{height:'60px',width:'50px',alignSelf:'center',marginTop:'60px',opacity:'0.2' }}
                />
                <div style={{padding:'5%',paddingLeft:'4%',paddingRight:'4%'}}>
                  <i style={{}}>HiCoder is doing a good job by offering production grade learning. This will enable students to code whole application where students will end up on tech lead position in a few years.</i>
                  <br/>
                  <img 
                    src={tes2}
                    className='testimonials-image'                    
                  />                    
                  <h5>Tapas Adhikary</h5>
                  <span style={{color:'gray'}}>UI/UX, Micro Focus</span>
                </div>
              </Carousel.Item>
              <Carousel.Item className="testimonial">
                <img
                  src={quotes}
                  alt="First slide"
                  style={{height:'60px',width:'50px',alignSelf:'center',marginTop:'60px',opacity:'0.2' }}
                />
                <div style={{padding:'5%',paddingLeft:'4%',paddingRight:'4%'}}>
                  <i style={{}}>HiCoder is encouraging students to learn engineering. Having production grade development experience on project will reduce onboarding burden on candidates as well as project leads</i>
                  <br/>
                  <img 
                    src={tes3}
                    className='testimonials-image'                    
                  />
                    
                  <h5>Sudhir Kumar</h5>
                  <span style={{color:'gray'}}>Technical Lead, HARMAN International</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:'#1c3988',paddingTop:'40px',paddingBottom:'40px',textAlign:'center',overflow:'auto' ,clear:'both'}}>
        <h1 style={{fontWeight:'700',color:'white'}}>Partner & Associates</h1>
        <img
          src={part1}
          width='15%'
          style={{float:'left',margin:'2%',marginLeft:'10%'}}
          />
          <img
          src={part2}
          width='15%'
          style={{float:'left',margin:'2%'}}
          />
          <img
          src={part3}
          width='15%'
          style={{float:'left',margin:'2%'}}
          />
          <img
          src={part4}
          width='15%'
          style={{float:'left',margin:'2%'}}
          />
      </div>

      <div style={{clear:'both',textAlign:'center',paddingTop:'100px'}}>
        <p>NEWS</p>
        <h1 style={{fontWeight:'700'}}>#COVID19 Demands more full stack developers.</h1>
        <h1 style={{fontWeight:'700',color:'#1c3988'}}>& Industry Updates</h1>       
      </div>
      <CardDeck style={{padding:'5%',paddingLeft:'10%',paddingRight:'10%'}}>
        <Card>
          <Card.Img variant="top" src={bc1} />
          <Card.Body>
            <Card.Title>College education isn’t enough to be relevant for the tech Industry.</Card.Title>
            <div>
              <div style={{float:'left'}}>
                <img
                  src={bclogo}
                  width='40%'
                /> HiCoder  
              </div>
              <div style={{float:'right',paddingTop:"10px"}}>
              06 Sep 2020
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={bc2} />
          <Card.Body>
            <Card.Title>IT project demand increases by 127% as offline businesses shut down.</Card.Title>
            <div>
              <div style={{float:'left'}}>
                <img
                  src={bclogo}
                  width='40%'
                /> HiCoder  
              </div>
              <div style={{float:'right',paddingTop:"10px"}}>
                14 Oct 2020
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={bc3} />
          <Card.Body>
            <Card.Title>13 reasons why businesses love hiring failed entrepreneurs.</Card.Title>
            <div>
              <div style={{float:'left'}}>
                <img
                  src={bclogo}
                  width='40%'
                /> HiCoder  
              </div>
              <div style={{float:'right',paddingTop:"10px"}}>
                17 Oct 2020
              </div>
            </div>
          </Card.Body>          
        </Card>
      </CardDeck>  
      <div className='footer' style={{width:'100%',paddingLeft:'10%',paddingRight:'10%',paddingTop:'100px'}}>
        <div style={{clear:'both'}}>
          <div style={{width:'45%',float:'left',padding:'30px',paddingRight:'100px'}}>
            <img
              src={logo}
              width='30%'
              />
              <p style={{paddingTop:'30px',fontSize:'18px'}}>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
              <Button style={{backgroundColor:'#1c3988',marginLeft:'20px',margin:'20px',paddingLeft:'20px',paddingRight:'20px',border:'none',fontWeight:'500',borderRadius:'0px'}}>APPLY NOW</Button>
          </div>
          <div style={{width:'10%',float:'left',padding:'30px'}}>
          <h3 style={{fontWeight:'700',color:'#1c3988',paddingBottom:'20px'}}>Info</h3> 
          <a className='footer-info'>Home</a><br /> 
          <a className='footer-info'>About</a><br />
          <a className='footer-info'>Blog</a><br />
          <a className='footer-info'>FAQ</a><br />
          <a className='footer-info'>Contact</a>
          </div>
          <div style={{width:'40%',float:'left',padding:'30px',paddingLeft:'12%'}}>
            <h3 style={{fontWeight:'700',color:'#1c3988',paddingBottom:'20px'}}>Contact</h3>   
              <img 
                src={fi1}
                width='10%'
              /><span style={{fontSize:'12px'}}>264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</span><br /><br />
              <img 
                src={fi2}
                width='8%'
              /><span > (+91) 9206 980 980</span><br /><br />
              <img 
                src={fi3}
                width='8%'
              /><span > admission@hicoder.in</span><br /><br />
              <img 
                src={fi4}
                width='8%'
              /><span > 10:00AM - 06:00PM</span>
          
          </div>
          
        </div> 
        <div style={{clear:'both'}}>
          <hr style={{borderTop: '2px solid #8c8b8b'}} />
          © Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.<br/>
          Privacy Policy | Terms of Service | * Registration Charges Applied
          <div style={{float:'right'}}>
          <img
              src={fb}
              width='40px'
              style={{filter: 'brightness(0) ',paddingLeft:'20px'}}
            />
            <img
              src={insta}
              width='40px'
              style={{filter: 'brightness(0) ',paddingLeft:'20px'}}
            />
            <img
              src={twitter}
              width='40px'
              style={{filter: 'brightness(0) ',paddingLeft:'20px'}}
            />
            <img
              src={linked}
              width='40px'
              style={{filter: 'brightness(0) ', paddingLeft:'20px'}}
            />
          
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
