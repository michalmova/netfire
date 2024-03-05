interface Props {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const SeeMoreButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="font-inter font-semibold uppercase text-sm text-gray_5  underline decoration-gray_5"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SeeMoreButton