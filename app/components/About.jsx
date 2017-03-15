var React = require('react');





var About = (props) => {
  
      return (
            <div>
            <h1 className="text-center page-title"> About </h1>
            <p> This is a weather application build on React.js. 
               I have built this for The complete React.js web app developer course 
            </p>

            <p>
                Here are some of the tools I used and the git repo:
            </p>
                  <ul>
                        <li>
                              <a href='https://facebook.github.io/react'> React.js </a> - This was the Javascript framework used
                        </li>

                        <li>
                              <a href="https://openweathermap.org"> Open Weather Map </a> - I used Open Weather Map to search for the weather data by city name
                        </li>

                        <li>
                               <a href="https://github.com/TheLazyDev/react-weather-app"> Github </a>  - Github repo of this project 
                        </li>
                  </ul>
             
         

            </div>
        )
}








module.exports = About;