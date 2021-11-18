import React from 'react';
import homeImg from '../assets/fitness3.jpg'
import '../CSS/Home.css';
import { Link } from 'react-router-dom'
import Header from './Header';

export default function Home(props) {    

    console.log('props in home.js: ', props);

    const handleChange = (e) => {
        props.setHomePage(false);
    }
    
    return(
        <div>
        <div className="header-section">
          {/* <Header isLoggedIn = { isLoggedIn } role = { role }  message = { message } /> */}
        </div>
            <div className="container">
                <div>
                    <div className="left">
                        <h1>Welcome to Anywhere Fitness</h1>
                    </div>
                    <div>
                        <p>THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.</p>
                    </div>
                    <div className="register" onChange={handleChange} >
                        <Link className="register-now" to='/register' >Register Now</Link>
                    </div>
                </div>
                <div className="href='/register'">
                    <img src={homeImg} alt="A woman with a barbell on her back"/>
                </div>
            </div>
        </div>
    )
}