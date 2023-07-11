import { FC } from 'react'

const ArrowIcon: FC<{
  stroke?: string
  size?: number
  className?: string
}> = ({ stroke = '#667085', size = 20, className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
        stroke={stroke}
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowIcon
