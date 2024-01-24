interface TextProps {
    children: string
    className?: string
    style?: React.CSSProperties
}

const Text = ({className, style, children,}: TextProps) => {
  return (
    <h3 style={style} className={`${className} text-sm lg:text-md`}>{children}</h3>
  )
}

export default Text