import Style from "./HomeFooter.module.css"

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
            <div className={Style.footerDiv}>
                
                <div className={Style.footerLinksDiv}>
                    {footerData.map((data, index) => {
                        return (
                            <div key={index} className={Style.footLinksSectionDiv} >
                                <h2 key={index} className={Style.footerH2}>{data.Heading}</h2>
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