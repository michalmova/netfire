interface Props {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const NavButtonIcon = ({ children, onClick }: Props) => {
  return (
    <button
      className='h-[43px] w-[43px] border rounded-full bg-gray px-[11px] hover:bg-creamy transition flex items-center justify-center'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default NavButtonIcon