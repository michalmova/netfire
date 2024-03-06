import NavButtonIcon from "@components/buttons/NavButtonIcon"
import NavButtonText from "@components/buttons/NavButtonText"
import Basket from "@components/icons/Basket"
import Person from "@components/icons/Person"
import Search from "@components/icons/Search"
import Token from "@components/icons/Token"

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
    <nav className="padding_x py-[18px] w-full grid grid-cols-3 items-center">
      <TextButtons />
      <span className="z-[-1]">
        <Token />
      </span>
      <IconButtons />
    </nav>
  )
}

export default Nav