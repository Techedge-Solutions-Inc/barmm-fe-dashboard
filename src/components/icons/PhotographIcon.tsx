interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const PhotographIcon: React.FC<Props> = ({
    fill = 'none',
    width = 65,
    height = 65,
    stroke = '#3D3D3D',
    strokeWidth = 4,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox={`0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M2.563 47.674l17.196-17.197a7.5 7.5 0 0110.607 0l17.197 17.197m-7.5-7.5l5.946-5.947a7.5 7.5 0 0110.607 0l5.947 5.947m-22.5-22.5h.037m-30.038 45h45a7.5 7.5 0 007.5-7.5v-45a7.5 7.5 0 00-7.5-7.5h-45a7.5 7.5 0 00-7.5 7.5v45a7.5 7.5 0 007.5 7.5z"
            />

        </svg>
    </div>
);

export default PhotographIcon;
