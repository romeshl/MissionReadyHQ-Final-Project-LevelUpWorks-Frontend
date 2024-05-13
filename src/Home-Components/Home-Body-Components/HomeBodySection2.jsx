// Imports the useState hook
import { useState } from 'react';

// Imports CSS Styles 
import Style from "./HomeBodySection2.module.css";

// Imports images for clickable img elements
import imgAnimation from "../../assets/Home/animation.png";
import imgGames from "../../assets/Home/games.png";
import imgChatbots from "../../assets/Home/games.png";
import imgAugreality from "../../assets/Home/augreality.png";

// Imports images to be shown on the right side in a laptop
import imgLaptop1 from "../../assets/Home/laptop1.png";
import imgLaptop2 from "../../assets/Home/laptop2.png";
import imgLaptop3 from "../../assets/Home/laptop3.png";
import imgLaptop4 from "../../assets/Home/laptop4.png";

// Imports images for the img elements of the bottom part of the section
import imgGroup1 from "../../assets/Home/group1.png";
import imgGroup2 from "../../assets/Home/group2.png";
import imgGroup3 from "../../assets/Home/group3.png";
import imgGroup4 from "../../assets/Home/group4.png";

// 2nd of 3 of Home -> Body
export default function HomeBodySection2() {
    const circle = '\u3007'; // Holds the empty circle 
    const filledCircle = '\u2B24'; // Holds filled circle

    // initializes an array with circles to be used as clickable bullet points
    const [circles, setCircle] = useState([filledCircle, circle, circle, circle]);

    // creates an array with images to be loaded on to clickable img elements
    const images = [imgAnimation, imgGames, imgChatbots, imgAugreality];

    // creates an array with images to select and update the img showing a laptop
    const laptopImages = [imgLaptop1, imgLaptop2, imgLaptop3, imgLaptop4];

    // initialize the first laptop image as first item from the laptopImages array
    const [laptopImage, setLaptopImage] = useState(laptopImages[0]);

    // array with images to be loaded on to the img elements of the bottom part of the section
    const imgGroup = [imgGroup1, imgGroup2, imgGroup3, imgGroup4];

    // update the laptop image and bullet point based on the clicks either on the image or bullet point
    function SetImageAndOther(index) {
        // Set the laptop image based on the index
        setLaptopImage(laptopImages[index]);
        // Resets circles array to all empty circles
        for (let i = 0; i < 4; i++)
        {
            circles[i] = circle;
        }
        // Set the full circle to bullet point based on the clicked image or bullet point
        circles[index] = filledCircle;
        // update the bullet points based on the updated circles array
        setCircle(circles);
    }
    
    return (
        <> {/* This div contains all the elements in Body Section 2 */}
            <div className={Style.bodySection2Div}>

                {/* This div holds the elements in the left side of section 2 */}
                <div className={Style.bodySection2LeftDiv}>
                    {/* Heading of the top left side of the section */}
                    <h2 className={Style.bodySection2LeftH2}>What we offer</h2>
                    {/* Text of the top left side of the section */}
                    <p className={Style.bodySection2LeftP}>
                        The Creative Problem Solving programme is series of
                        digital creation projects aimed to encourage self-motivation 
                        and student agency, designed by New Zealand's leading IT 
                        industry experts and schools.
                    </p>

                    {/* Heading of the clickable images on the top left side */}
                    <h3 className={Style.bodySection2LeftH3}>What will students create?</h3>
                    {/* Div holding the clickable images  */}
                    <div className={Style.bodySection2LeftImagesDiv}>
                        {/* Loads the images on to the clickable img elements from the array */}
                        {images.map((img, index) => {
                            {/* Will call the SetImageAndOther function based on the index*/ }
                            return <img className={Style.bodySection2LeftImg}
                                src={img} key={index} onClick={()=> SetImageAndOther(index)}/>
                        })}
                    </div>
                </div>

                {/* This div holds the elements in the right side of section 2 */}
                <div className={Style.bodySection2RightDiv}>
                    {/* This img holds the laptop image based on what image or bullet point is clicked */}
                    <img className={Style.bodySection2RightLaptopImg} src={laptopImage} />         
                    {/* This Ul holds the clickable bullet points */}
                    <ul className={Style.bodySection2RightUl}>
                        {circles.map((circle, index) => {
                            { /* Will call the SetImageAndOther function based on the index*/ }
                            return <li key={index} onClick={()=> SetImageAndOther(index)}>{circle}</li>
                        })} 
                    </ul>
                </div>
            </div>
            {/* This div holds the elements of the bottom part of the section */}
            <div className={Style.bodySection2BottomDiv}>
                {/* Heading of the bottom part of the section */}
                <h3 className={Style.bodySection2BottomH3}>Teaching kids programming and digital skills is 
                    MORE than just writing code.
                </h3>
                {/* Loads the images from array to the bottom part of the section */}
                <div className={Style.bodySection2BottomImagesDiv}>
                    {imgGroup.map((image, index) => {
                        return <img key={index} className={Style.bodySection2BottomImage} src={image} />;
                    })}
                </div>
            </div>
        </>
    );
}