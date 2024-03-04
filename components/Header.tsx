import Advert from "./Advert"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Advert text="new customers get 15% off! use code" emphasizedText="welcome15" />
      <Nav />
    </div>

  )
}

export default Header
