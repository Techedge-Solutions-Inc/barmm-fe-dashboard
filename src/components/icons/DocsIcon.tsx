interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const DocsIcon: React.FC<Props> = ({
    fill = '#4E4E4E',
    width = 18,
    height = 18,
    stroke = '#4E4E4E',
    strokeWidth = 1.5,
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
                d="M6.308 2h5.521c.057 0 .114.003.171.01 2.247.147 3.992 1.888 4 3.99v6c-.008 2.215-1.936 4.004-4.308 4H6.308c-2.372.004-4.3-1.786-4.308-4V6c.008-2.214 1.936-4.004 4.308-4z"
                clipRule="evenodd"
            ></path>
            <path
                fill={fill}
                d="M15.576 7.118a.75.75 0 000-1.5v1.5zm-4.076-.75h-.75c0 .414.336.75.75.75v-.75zm.75-4.357a.75.75 0 00-1.5 0h1.5zm-1.212 7.891a.75.75 0 000-1.5v1.5zm-6.114-1.5a.75.75 0 100 1.5v-1.5zM7.98 6.845a.75.75 0 100-1.5v1.5zm-3.057-1.5a.75.75 0 100 1.5v-1.5zm7.133 7.615a.75.75 0 000-1.5v1.5zm-7.133-1.5a.75.75 0 000 1.5v-1.5zm10.652-5.842H11.5v1.5h4.076v-1.5zm-3.326.75V2.01h-1.5v4.357h1.5zm-1.212 2.034H4.924v1.5h6.114v-1.5zM7.981 5.345H4.924v1.5H7.98v-1.5zm4.076 6.115H4.924v1.5h7.133v-1.5z"
            ></path>
        </svg>
    </div>
);

export default DocsIcon;
