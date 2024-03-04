import ColoredStripe from "@components/ColoredStripe"
import { brandName, authorsRights } from "@utils/globals"
import Token from "./icons/Token"

const Footer = () => {

  return (
    <div className="h-[113px] justify-center bg-gray w-full">
      <ColoredStripe />
      <div className="px-content h-full flex items-center justify-between gap-7 tracking-[0.07em]">
        <div className="flex items-center justify-center gap-5">
          <Token />
          <span className="font-exo font-semibold text-gray_2 text-2xl whitespace-nowrap">{brandName}</span>
        </div>
        <div className="h-min">
          <span className="font-inter text-[11px] text-gray_3 font-normal leading-[13px]">
            {authorsRights}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer