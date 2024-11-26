import { BestSeller } from "../components/BestSeller";
import { Hero } from "../components/Hero";
import { LatestCollection } from "../components/LatestCollection";
import { OurPolicy } from "../components/OurPolicy";
import {NewsletterBox} from "../components/NewsletterBox"
import { WhatsAppChat } from "../components/WhatsAppButton";
export function Home(){

    return(
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox />
            <WhatsAppChat/>
        </div>
    )
}