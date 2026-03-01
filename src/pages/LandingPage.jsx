import AgentPlatform from "../components/agentPlatform/AgentPlatform"
import LandingPageAgentWork from "../components/landingPageAgentWork/LandingPageAgentWork"
import LandingPageFooter from "../components/landingPageFooter/LandingPageFooter"
import LandingPageIntro from "../components/landingPageIntro/LandingPageIntro"
import LandingTopbar from "../components/layouts/LandingTopbar"

function LandingPage() {
  return (
    <div>
      <LandingTopbar/>
      <LandingPageIntro/>
      <AgentPlatform/>
      <LandingPageAgentWork/>
      <LandingPageFooter/>

    </div>
  )
}

export default LandingPage