interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const MaleIcon: React.FC<Props> = ({
    fill = '#fff',
    width = 4,
    height = 8,
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
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                fill={fill}
                d="M1.6 1.6a.8.8 0 100-1.6.8.8 0 000 1.6zM2.8 2H.4a.4.4 0 00-.4.4v2.8h.8V8h1.6V5.2h.8V2.4a.4.4 0 00-.4-.4z"
            ></path>

        </svg>
    </div>
);

export default MaleIcon;
