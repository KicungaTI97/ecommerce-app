import { BestSeller } from "../components/BestSeller";
import { Hero } from "../components/Hero";
import { LatestCollection } from "../components/LatestCollection";
import { OurPolicy } from "../components/OurPolicy";
import {NewsletterBox} from "../components/NewsletterBox"
export function Home(){

    return(
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox />
        </div>
    )
}