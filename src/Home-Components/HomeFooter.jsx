// Loads CSS styling
import Style from "./HomeFooter.module.css"

// Footer section of the Home page
export default function HomeFooter() {

    // This object holds all the data displayed on the footer. 
    const footerData = [
        {
            Heading: "COMPANY",
            Links: ["About Us", "Careers", "Partners"]
        },
        {
            Heading: "COURSES",
            Links: ["Register", "Login", "Projects", "Teachers", "Parents", "Resources"]
        },
        {
            Heading: "SUPPORT",
            Links: ["FAQ's", "Helpdesk", "Contact US"]
        },
        {
            Heading: "LEGAL",
            Links: ["Terms & Conditions", "Privacy Policy"]
        },
        {
            Heading: "LevelUp Works",
            Links: [`LevelUp Works is an Auckland-based enterprise dedicated to developing game-based
            learning software to help teachers in response to the New Zealand Digital Technologies
            & Hangarau Matihiko.`, "alan@levelupworks.com", "(021) 668 185"]
        }
    ]

    return (
        <>
            {/* This Div is the background of the footer section */}
            <div className={Style.footerDiv}>
                {/* This Div holds all the elements in the footer section */}
                <div className={Style.footerLinksDiv}>
                    {/* Used the map function to load data into Divs and H2 headings*/}
                    {footerData.map((data, index) => {
                        return (
                            <div key={index} className={Style.footLinksSectionDiv} >
                                <h2 key={index} className={Style.footerH2}>{data.Heading}</h2>
                                {/* Uses nested map function to load other data under H2 headings*/}
                                {data.Links.map((links, i) => {
                                    return <h3 key={i} className={Style.footerH3}>{links}</h3>
                                })}
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}