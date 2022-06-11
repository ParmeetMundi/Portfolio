import React from 'react';
import '../src/Css/Projects.css';
import Carousel from 'react-bootstrap/Carousel'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const Project1 = () => {
    return <div class='Projects'>
       <p id='projects'>Projects</p>
       

     <Carousel>
     <Carousel.Item>
     
       <div class='project_window'>
          <img src='secure.webp'/>
          <ul>
          <li> Store Data on cloud with end-to-end Encryption.</li>
          <li>Files are encrypted with AES 128 algorithm, PBKDF2 (Password-Based Key Derivation Function 2) used
          for key generation.</li>
          <li>Technologies used: ReactJS, CSS, JavaScript, Material UI, ExpressJS, MongoDB, NodeJS, File
          System API.</li>
          <a href='http://securedata1.herokuapp.com/'> 
          <li>Link to website</li>
          </a>
          </ul>
       </div>
       
  </Carousel.Item>
  <Carousel.Item>
      
       <div class='project_window'>
       <img src='memes.webp'/>
       <ul>
       <h1>Vogue NewsCast </h1> 
       <li>Show Trending Memes, Music, Games, Tweets.</li>
       <li>API’s Used -Twitter API, Giphy API, Youtube API.</li>
       <li>Deployed on Heroku.</li>
       <a href='https://vogue-newscast.herokuapp.com/Login'>
       <li>Link to website</li>
       </a>
       </ul>
       </div>
       
  </Carousel.Item>
  <Carousel.Item>
  
       <div class='project_window'>
            <img src='deepLearning.webp'/>
           <ul>
           <h1>Video Violence Detection (CNN+LSTM) </h1> 
           <li> Dataset is taken from Kaggle (2000 videos)</li>
           <li> 20 Frame are extracted from each video</li>
           <li> Able to get Validation Accuracy: 90%,Precision: 90% , F1Score: 90%</li>
           <a href='https://github.com/ParmeetMundi/Violence_Video_Detection-ML-'>
           <li>Link to NoteBook</li>
           </a>
           </ul>
           </div>
          
  </Carousel.Item>
</Carousel>


    </div>;
}


export default Project1;