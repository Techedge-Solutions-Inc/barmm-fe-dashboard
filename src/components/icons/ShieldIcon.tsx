import * as React from "react"

interface Props {
  fill?: string,
  width?: string | number,
  height?: string | number,
  stroke?: string,
  strokeWidth?: number,
  className?: string
}


const ShieldIcon = ({
  fill = 'none',
  width = 19,
  height = 18,
  stroke = '#009865',
  strokeWidth = 1.5,
  className = '',
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    {...rest}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M16.946 3.752A10.82 10.82 0 0 1 9.146 1a10.82 10.82 0 0 1-7.8 2.751A10.88 10.88 0 0 0 1 6.481C1 11.541 4.461 15.794 9.146 17c4.684-1.206 8.146-5.458 8.146-10.519 0-.943-.12-1.857-.346-2.73Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="m11.776 6.728-4.048 4.048L6 9.048"
    />
  </svg>
)
export default ShieldIcon;