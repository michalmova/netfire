import Advert from "@components/Advert"
import Nav from "@components/Nav"

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <Advert text="new customers get 15% off! use code" emphasizedText="welcome15" />
      <Nav />
    </header>

  )
}

export default Header
