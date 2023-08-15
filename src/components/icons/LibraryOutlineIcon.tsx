interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const LibraryOutlineIcon: React.FC<Props> = ({
    fill = 'none',
    width = 19,
    height = 18,
    stroke = '#736F6F',
    strokeWidth = 1.5,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 19 18"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M5.944 10.778v2.666M9.5 10.778v2.666m3.556-2.666v2.666M1.5 17h16m-16-9.778h16m-16-2.666L9.5 1l8 3.556M2.389 7.222H16.61V17H2.39V7.222z"
      
            />

        </svg>
    </div>
);

export default LibraryOutlineIcon;
