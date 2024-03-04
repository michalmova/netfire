import ColoredStripe from "./ColoredStripe"

interface Props {
  text: string,
  emphasizedText?: string
}

const Advert = ({ text, emphasizedText }: Props) => {
  return (
    <>
      <div className="h-[62px] flex flex-col items-center justify-center bg-gray w-full">
        <div className="font-medium text-sm uppercase leading-[17px] tracking-[0.07em]">
          <span className="text-black_1">{text}</span>
          <span className="text-purple"> {emphasizedText}</span>
        </div>
      </div>
      <ColoredStripe />
    </>
  )
}

export default Advert
