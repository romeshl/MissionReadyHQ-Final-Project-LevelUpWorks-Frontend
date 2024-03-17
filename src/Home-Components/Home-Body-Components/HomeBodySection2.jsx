import { useState } from 'react';

import Style from "./HomeBodySection2.module.css"

import imgAnimation from "../../assets/Home/animation.png"
import imgGames from "../../assets/Home/games.png"
import imgChatbots from "../../assets/Home/games.png"
import imgAugreality from "../../assets/Home/augreality.png"

import imgLaptop1 from "../../assets/Home/laptop1.png"
import imgLaptop2 from "../../assets/Home/laptop2.png"
import imgLaptop3 from "../../assets/Home/laptop3.png"
import imgLaptop4 from "../../assets/Home/laptop4.png"


export default function HomeBodySection2() {
    const images = [imgAnimation, imgGames, imgChatbots, imgAugreality];
    const laptopImages = [imgLaptop1, imgLaptop2, imgLaptop3, imgLaptop4];

    const [laptopImage, setLaptopImage] = useState(laptopImages[0])

    function SetImageAndOther(index) {
        setLaptopImage(laptopImages[index]);
    }

    return (
        <> {/* This div contains all the elements in Body Section 2 */}
            <div className={Style.bodySection2Div}>

                {/* This div holds the elements in the left side of section 2 */}
                <div className={Style.bodySection2LeftDiv}>
                    <h2 className={Style.bodySection2LeftH2}>What we offer</h2>
                    <p className={Style.bodySection2LeftP}>
                        The Creative Problem Solving programme is series of
                        digital creation projects aimed to encourage self-motivation 
                        and student agency, designed by New Zealand's leading IT 
                        industry experts and schools.
                    </p>
                    <h3 className={Style.bodySection2LeftH3}>What will students create?</h3>

                    <div className={Style.bodySection2LeftImagesDiv}>
                        {images.map((img, index) => {
                            return <img className={Style.bodySection2LeftImg}
                                src={img} onClick={()=> SetImageAndOther(index)}/>
                        })}
                    </div>
                </div>
                {/* This div holds the elements in the right side of section 2 */}
                <div className={Style.bodySection2RightDiv}>
                   <img src={laptopImage}/>         
                </div>
            </div>
        </>
    );
}