'use client'

import Badge from "./Badge"

import SeeMoreButton from "./buttons/SeeMoreButton"

interface Props {
  badgeTitle?: string,
  children: React.ReactNode,
  seeMoreBtnTitle?: string
}

const TextSection = ({ badgeTitle, children, seeMoreBtnTitle }: Props) => {
  return (
    <section className="padding_x flex flex-col items-center gap-10 py-10">
      <span className="flex flex-col items-center gap-5">
        {badgeTitle && <Badge text="example section" />}
        {children}
      </span>
      {seeMoreBtnTitle && <SeeMoreButton text="see more" />}
    </section>
  )
}

export default TextSection
