import DetailHero from "@/components/DetailHero"
import DetailSection from "@/components/DetailSection"
import HighlyRatedChoise from "@/components/HighlyRatedChoise"
import Location from "@/components/Location"
import ThingsToKnow from "@/components/ThingsToKnow"


const page:React.FC=()=> {
  return (
    <div className="w-full">
      <DetailHero/>
      <DetailSection/>
      <HighlyRatedChoise/>
      <Location/>
      <ThingsToKnow/>
    </div>
  )
}

export default page
