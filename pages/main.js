import Featured from "./main/featured"
import HeroImage from "./main/heroImage"
import Mint from "./main/mint"
import RareSpec from "./main/rarespec"
import RoadMap from "./main/roadmap"
import RoadMapMobile from "./main/roadmapmobile"
import Jungle from './main/jungle';
import SocaialLinkHeroWhitepaperMobile from "./main/socaialLinkHeroWhitepaperMobile"
import SocialLinkHero from "./main/socialLinkHero"
import Story from "./main/story"
import More from "./main/more"
import Team from "./main/team"
import Faq from "./main/faq"

export default function Main() {
    return (
      <div>
          <HeroImage />
          <SocialLinkHero />
          <SocaialLinkHeroWhitepaperMobile />
          <Mint />
          {/* <div style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div> */}
          <RareSpec />
          <Story />
          <Featured />
          <RoadMap />
          <RoadMapMobile />
          <Jungle />
          <More />
          <Team />
          <Faq />
      </div>
    )
  }