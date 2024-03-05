import Hero from "@components/Hero"
import TextSection from "@components/TextSection"
import ColoredText from "@components/ColoredText"

const Home = () => {
  return (
    <div className="grow">
      <Hero />
      <TextSection
        badgeTitle="example section"
        seeMoreBtnTitle="see more"
      >
        <ColoredText
          text='Lorem <colored>ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel</colored> massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi vitae libero in nunc sodales.'
          textClasses="font-exo font-medium text-[32px] text-center tracking-[-0.05em] leading-[40px]"
          coloredTextClasses="bg_gradient_text font-semibold"
        />
      </TextSection>
    </div>
  )
}

export default Home