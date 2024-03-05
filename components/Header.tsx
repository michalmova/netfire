import Nav from "@components/Nav"
import ColoredText from "./ColoredText"
import ColoredStripe from "./ColoredStripe"

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="py-[22.5px] flex flex-col items-center justify-center bg-gray w-full">
        <ColoredText
          text="new customers get 15% off! use code <colored>welcome15</colored>"
          textClasses="font-medium text-sm uppercase leading-[17px] text-black_1"
          coloredTextClasses="text-purple"
        />
      </div>
      <ColoredStripe />
      <Nav />
    </header >
  )
}

export default Header
