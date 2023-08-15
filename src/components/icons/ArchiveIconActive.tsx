interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ArchiveIconActive: React.FC<Props> = ({
    fill = '#3D3D3D',
    width = 19,
    height = 17,
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
                d="M2.75 0a2.17 2.17 0 00-1.591.711A2.53 2.53 0 00.5 2.428c0 .645.237 1.262.659 1.718a2.17 2.17 0 001.591.711h13.5a2.17 2.17 0 001.591-.711 2.53 2.53 0 00.659-1.718 2.53 2.53 0 00-.659-1.717A2.17 2.17 0 0016.25 0H2.75z"
                fill={fill}

            />
            <path

                fill={fill}
                fillRule="evenodd"
                d="M1.625 6.072h15.75v8.5a2.53 2.53 0 01-.659 1.717 2.17 2.17 0 01-1.591.711H3.875a2.17 2.17 0 01-1.591-.71 2.53 2.53 0 01-.659-1.718v-8.5zM7.25 9.715c0-.322.119-.63.33-.859.21-.227.497-.355.795-.355h2.25c.298 0 .585.128.796.355.21.228.329.537.329.859 0 .322-.118.63-.33.859a1.085 1.085 0 01-.795.355h-2.25c-.298 0-.585-.128-.795-.355a1.265 1.265 0 01-.33-.859z"
                clipRule="evenodd"
            />
        </svg>
    </div>
);

export default ArchiveIconActive;
