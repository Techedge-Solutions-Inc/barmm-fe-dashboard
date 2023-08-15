interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const FemaleIcon: React.FC<Props> = ({
    fill = '#fff',
    width = 4,
    height = 8,
    stroke = '#fff',
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
                d="M1.979 1.6a.8.8 0 100-1.6.8.8 0 000 1.6zM3.158 2.274A.399.399 0 002.78 2h-1.6a.4.4 0 00-.379.274l-.8 2.4.71.237L.38 6.4h.8V8h1.6V6.4h.8l-.332-1.49.71-.237-.8-2.4z"
            ></path>

        </svg>
    </div>
);

export default FemaleIcon;
