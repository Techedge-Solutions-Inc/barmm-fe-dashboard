interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const OfficeBuildingIcon: React.FC<Props> = ({
    fill = '#fff',
    width = 15,
    height = 17,
    stroke = '',
    strokeWidth = 3,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox={`0 0 ${width} ${height}`}
            fill={'none'}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                fill={fill}
                fillRule="evenodd"
                d="M1.063 2.125A2.125 2.125 0 013.188 0h8.5a2.125 2.125 0 012.124 2.125v12.75a1.062 1.062 0 110 2.125h-3.187a1.062 1.062 0 01-1.063-1.063v-2.124A1.063 1.063 0 008.5 12.75H6.375a1.062 1.062 0 00-1.063 1.063v2.124A1.063 1.063 0 014.25 17H1.062a1.062 1.062 0 110-2.125V2.125zM4.25 3.188h2.125v2.124H4.25V3.188zm2.125 4.25H4.25v2.125h2.125V7.437zM8.5 3.188h2.125v2.124H8.5V3.188zm2.125 4.25H8.5v2.125h2.125V7.437z"
                clipRule="evenodd"
            ></path>

        </svg>
    </div>
);

export default OfficeBuildingIcon;
