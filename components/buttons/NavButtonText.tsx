'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  text: string,
  href: string
}

const NavButtonText = ({ text, href = '/' }: Props) => {
  const pathname = usePathname()
  const baseClasses = 'h-[39px] font-exo text-sm font-medium text-black_1 uppercase border rounded-md px-[30px] hover:text-semibold hover:bg-creamy transition'

  return (
    <Link
      href={href}
    >
      <button
        className={`${baseClasses} ${pathname === href ? 'bg-creamy' : 'bg-gray'}`}
      >
        <span>{text}</span>
      </button>
    </Link >
  )
}

export default NavButtonText

