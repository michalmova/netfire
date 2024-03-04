import NavButtonIcon from "./buttons/NavButtonIcon"
import NavButtonText from "./buttons/NavButtonText"
import Basket from "./icons/Basket"
import Person from "./icons/Person"
import Search from "./icons/Search"
import Token from "./icons/Token"


const TextButtons = () => (
  <ul className="font-exo font-semibold flex gap-[15px]">
    <li> <NavButtonText text='home' href="/" /> </li>
    <li> <NavButtonText text='about' href="/about" /> </li>
    <li> <NavButtonText text='products' href="/products" /></li>
  </ul>
)
const IconButtons = () => (
  <ul className="flex gap-[18.5px] justify-self-end">
    <li>
      <NavButtonIcon >
        <Basket />
      </NavButtonIcon>
    </li>
    <li>
      <NavButtonIcon >
        <Person />
      </NavButtonIcon>
    </li>
    <li>
      <NavButtonIcon >
        <Search />
      </NavButtonIcon>
    </li>
  </ul>
)

const Nav = () => {
  return (
    <div className="h-[101px] w-full px-content grid grid-cols-3 items-center">
      <TextButtons />
      <Token />
      <IconButtons />
    </div>
  )
}

export default Nav