interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const SearchIcon: React.FC<Props> = ({
    fill = 'none',
    width = 21,
    height = 20,
    stroke = '#3D3D3D',
    strokeWidth = '2',
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 21 20"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M9.273 17a8 8 0 100-16 8 8 0 000 16zM19.274 19l-4.35-4.35"

            />

        </svg>
    </div>
);

export default SearchIcon;
