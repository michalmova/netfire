interface Props {
  text: string,
  textClasses: string,
  coloredTextClasses: string
}

const ColoredText = ({ text, textClasses, coloredTextClasses }: Props) => {
  const coloredRegexp = new RegExp("(<colored>.*?<\/colored>)")

  const splitted = text.split(coloredRegexp)

  const finalText = splitted.map((part, i) => {
    const match = part.match(coloredRegexp)

    if (match) {
      const partWithoutTags = part.replace(/<\/?colored>/g, '')
      return <span key={i} className={coloredTextClasses}>{partWithoutTags}</span>
    } else {
      return <span key={i} className="">{part}</span>
    }
  })

  return (
    <p className={textClasses}>
      {finalText}
    </p>
  )
}

export default ColoredText
