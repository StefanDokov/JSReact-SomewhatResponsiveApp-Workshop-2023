import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai" 

const Home = () => {
    return (
        <>
        <div className="home" id="home">
            <main>
                <h1>TechStar.</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
            </div>
        </div>

        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>Polly must restore the balance between Reverie and our world and 
                    decide which Aspiration ultimately inspires humanity by making decisions 
                    represented by a system called the Augural. 
                    This web presents a multitude of scenes players will jump 
                    between that reveal possible futures that, in turn, unlock 
                    additional story branches. Polly does this by collecting crystals 
                    given to her with each choice and character bond she makes, which 
                    are used to unlock nodes on the Augural that alter the course of 
                    the story. 
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                      <AiFillGoogleCircle />
                      <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                      <AiFillAmazonCircle />
                      <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                      <AiFillYoutube />
                      <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "1s",
                    }}>
                      <AiFillInstagram />
                      <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
};

export default Home;