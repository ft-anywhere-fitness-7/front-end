import React from 'react';
import homeImg from '../assets/fitness3.jpg'

export default function Home(props) {

    return(
        <div>
            <div class="d-flex">
                <div>
                    <div>
                        <h1>Welcome to Anywhere Fitness</h1>
                    </div>
                    <div>
                        <p>THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.</p>
                    </div>
                    <div>
                        <button>Register Now</button>
                    </div>
                </div>
                <div>
                    <img src={homeImg} alt="A woman with a barbell on her back"/>
                </div>
            </div>
        </div>
    )
}