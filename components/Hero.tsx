import Badge from "./Badge"
import ColoredText from "./ColoredText"

const Hero = () => {
  return (
    <section className="px-content bg-black h-[900px] pb-40 pt-80 flex flex-col gap-11">
      <Badge
        text="lorem ipsum"
        customClasses="text-white py-3"
      />
      <span>
        <ColoredText
          text="<colored>Lorem Ipsum Dolor Sit amet</colored>"
          textClasses="font-exo font-semibold text-white text-[45px] max-w-[730px] leading-[57px] tracking-[-0.05em]"
          coloredTextClasses="bg_gradient_text font-bold"
        />
        <ColoredText
          text="Donec cursus ligula diam, nec congue augue ultrices nec."
          textClasses="font-exo font-semibold text-white text-[45px] max-w-[730px] leading-[57px] tracking-[-0.05em]"
          coloredTextClasses="bg_gradient_text font-bold"
        />
      </span>
    </section>
  )
}

export default Hero