

interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ArchiveIconInActive: React.FC<Props> = ({
    fill = 'none',
    width = 20,
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
                d="M3 5.031h14m-14 0a2 2 0 110-4h14a2 2 0 010 4m-14 0v10a2 2 0 002 2h10a2 2 0 002-2v-10m-9 4h4"

            />
            <path


            />
        </svg>
    </div>
);

export default ArchiveIconInActive;
