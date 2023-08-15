interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const DashboardActiveIcon: React.FC<Props> = ({
    fill = '#1E57A8',
    width = 16,
    height = 16,
    stroke = '',
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
                fill={fill}
                d="M0 1.143A1.143 1.143 0 011.143 0h13.714A1.143 1.143 0 0116 1.143v2.286a1.143 1.143 0 01-1.143 1.142H1.143A1.143 1.143 0 010 3.43V1.143zM0 8a1.143 1.143 0 011.143-1.143H8A1.143 1.143 0 019.143 8v6.857A1.143 1.143 0 018 16H1.143A1.143 1.143 0 010 14.857V8zm12.571-1.143A1.143 1.143 0 0011.43 8v6.857A1.143 1.143 0 0012.57 16h2.286A1.143 1.143 0 0016 14.857V8a1.143 1.143 0 00-1.143-1.143h-2.286z"
            ></path>
        </svg>
    </div>
);

export default DashboardActiveIcon;
