import type React from "react"
import AboutUsStyles from "./AboutUsStyles.module.scss"
import { Footer } from "../../footer/Footer"
import { texts, titles } from "./consts"


export const AboutUs: React.FC = () => {

    return (
        <div className={AboutUsStyles.mainWrapper}>
            <div className={AboutUsStyles.content}>
                {titles.map((title, index) => (
                    <div className={AboutUsStyles.paragraph} key={`${index} ${title}`}>
                        <p className={AboutUsStyles.title}>{title}</p>
                        <p className={AboutUsStyles.text}>{texts[index]}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}