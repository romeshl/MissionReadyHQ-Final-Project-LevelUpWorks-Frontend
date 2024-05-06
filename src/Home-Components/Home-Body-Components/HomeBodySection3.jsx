import HomeBodyBullets from "../../Other-Components/HomeBodyBullets";
import Style from "./HomeBodySection3.module.css";
import { useState } from 'react';

import imgClassRoom from "..//../assets/Home/classroom.png"

export default function HomeBodySection3() {

    // This array holds the button labels for buttons under the title "How our programme helps..."
    const buttonTexts = ["LEARNING PATHWAYS", "DIGITAL TECHNOLOGIES", "KEY COMPETENCIES", "IR4.0"];

    // This holds the index the of the button clicked. Sets the initial value as 0 
    const [CurrentIndex, setCurrentIndex] = useState(0);

    const bodySection3Data = [
        {
            "Button text": "LEARNING PATHWAYS",
            "Heading": "Interlinking Pathways",
            "Details": "This programme gives us a 5 important interlinking Learning Pathways.",
            "Points": [{
                Title: "COMPUTATIONAL THINKING",
                Details: `Within the programme the students are enabled to express problems 
                and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.`
            },
            {
                Title: "DEVELOPING DIGITAL OUTCOMES",
                Details: `This programme is designed to strengthen the outcomes 
                    of each students personally to form strong applications.`
            },
            {
                Title: "DESIGNING PROCESSED OUTCOMES",
                Details: `Students will be taught the ways of how outcomes are processed, thought about, and produced.
`
            }, {
                Title: "DEVELOP VISUAL AND SOCIAL COMMUNICATIONS",
                Details: `Students will learn to design visually pleasing applications 
                    used to both keep the user aware of what is happening on the screen.`
            }, {
                Title: "STRONG TECHNOLOGICAL PRACTICES",
                Details: `The programme will show students the best practices 
                    to think and solve the problems brought on by using technology.`
            }]
        },
        {
            "Button text": "DIGITAL TECHNOLOGIES",
            "Heading": "Expands Digital Knowledge Base",
            "Details": "This programme gives you the 5 major capabilities to be confident in Digital Technologies.",
            "Points": [{
                Title: "PROBLEM SOLVING",
                Details: `The programme challenges are designed to think around multiple 
                issues and challenges the way students interact with computers and other related technology.`
            },
            {
                Title: "DECISION-MAKING",
                Details: `The programme uses technology to make the lives of many people 
                happier through the decisions made when creating digital applications.`
            },
            {
                Title: "CONFIDENCE",
                Details: `When having the skills to manipulate the applications and learning 
                to use it brings self-confidence into your life.`
            }, {
                Title: "HIGHER SELF-EXPECTATIONS",
                Details: `This programme develops students to think the best of themselves to 
                bring higher expectations to their learning and lives as young adults.`
            }, {
                Title: "COHERENCE",
                Details: `This programme offers all students a broader education that makes 
                links within and across learning areas.`
            }]
        },
        {
            "Button text": "KEY COMPETENCIES",
            "Heading": "Enhance key competencies",
            "Details": "The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum",
            "Points": [{
                Title: "THINKING",
                Details: `In particular the programme focused on problem solving, design thinking and computational thinking.`
            },
            {
                Title: "DISCERNING CODES",
                Details: `Analysing language, symbols, and texts in order to understand and make sense 
                of the codes in which knowledge is expressed.`
            },
            {
                Title: "SELF-MANAGEMENT",
                Details: `Projects and challenges are designed to motivate students to explore and experiment with self-motivation.`
            }, {
                Title: "RELATIONSHIPS WITH PEERS",
                Details: `The programme is designed with unplugged sessions where students interact in a range of different situations, 
                including things like being able to listen well, recognise different points of view, and share ideas.`
            }, {
                Title: "PARTICIPATION AND COLLABORATION",
                Details: `The programme encourages students to be involved in communities, such as family, whanau, school, 
                and contribute and make connections with other people.`
            }]
        },
        {
            "Button text": "IR4.0",
            "Heading": "IR4.0",
            "Details": `Designed with IT industry experts, the programme develops the students to find applicable 
            jobs and careers in the Fourth Industrial Revolution. (IR4.0)`,
            "Points": [{
                Title: "LEARNING TO LEARN\n",
                Details: `The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.`
            },
            {
                Title: "COMMUNITY ENGAGEMENT",
                Details: `The programme encourages students to be involved in the communities, such as family, friends, and in school, 
                to contribute and make connections with other people.`
            },
            {
                Title: "CULTURAL DIVERSITY",
                Details: `This programme is designed in New Zealand and reflects NZ's cultural diversity.`
            }, {
                Title: "INCLUSION",
                Details: `In particular the programme is designed with acknowledgement to the student's identities and talents, 
                allowing them to be creative to their personal ability.`
            }, {
                Title: "FUTURE FOCUS",
                Details: `The programme leads students to explore future themes such as artificial intelligence and augmented reality.`
            }]
        },
    ]

    function ChangeContent(index) {
        //alert(index);
        setCurrentIndex(index);
    }

    return (
        <>
            <div className={Style.bodySection3TopDiv}>
                <h2 className={Style.bodySection3TopH2}>
                    How our programme helps teachers and schools</h2>
                <div className={Style.bodySection3TopButtonsDiv}>
                    {bodySection3Data.map((data, index) => {
                        return <button key={index} className=
                            {(index === CurrentIndex) ? Style.bodySection3TopButtonSelected : Style.bodySection3TopButtons}
                            onClick={() => ChangeContent(index)}>{data["Button text"]}</button>
                    })}

                </div>
            </div>
            <div className={Style.bodySection3MiddleDiv}>
                <div className={Style.bodySection3MiddleDivContent}>
                    <h2 className={Style.bodySection3MiddleDivContentH2}>{bodySection3Data[CurrentIndex]["Heading"]}</h2>
                    <h3 className={Style.bodySection3MiddleDivContentH3}>{bodySection3Data[CurrentIndex]["Details"]}</h3>

                    {bodySection3Data[CurrentIndex]["Points"].map((data, index) => {
                        return <HomeBodyBullets key={index} Title={data["Title"]} Details={data["Details"]} />
                    })}
                </div>
            </div>

            <div className={Style.bodySection3BottomDiv}>
                <div className={Style.bodySection3BottomDivLeft}>
                    <img className={Style.bodySection3BottomDivImage} src={imgClassRoom} alt="" />
                </div>
                <div className={Style.bodySection3BottomDivRight}>
                    <h2>What are you waiting for?</h2>
                    <h3>Start teaching Digital Technologies today.</h3>
                    <p>If you need more information, we are happy to answer any questions you may have.</p>
                </div>

            </div>
        </>
    )
}