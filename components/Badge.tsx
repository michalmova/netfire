interface Props {
  text: string,
  customClasses?: string
}

const Badge = ({ text, customClasses = '' }: Props) => {
  return (
    <span className={`py-4 px-5 w-max text-xs font-exo font-medium text-black_2 uppercase border rounded-xl bg-gray_4 border-gray_2 ${customClasses}`}>
      {text}
    </span>
  )
}

export default Badge
