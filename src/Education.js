import React from 'react';
import '../src/Css/Education.css'

const Education = () => {
    

    return <div class="Education">
        <p id='education'> Education </p>
        <div class='education_window'>
             <div class='inner_education_window education_image1'>
                <span> Thapar Institute of Engineering and Technology<br/>
                 Branch: Computer Engineering<br/>
                 CGPA: 9.60<br/>
                 2019-2023
                 </span>

            </div>
            <div class='inner_education_window education_image2'>
            <span>Green Grove Public School<br/>
                 High School Education <br/>
                 Percentage: 92.6%<br/>
                 2019</span>

            </div>
            <div class='inner_education_window education_image2'>
                <span> Green Grove Public School<br/>
                 Matriculation<br/>
                 CGPA: 10<br/>
                 2017</span>

            </div>
        </div>
     </div>;
}


export default Education;