interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ShieldExclamationIcon: React.FC<Props> = ({
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
                d="M17.446 3.752A10.82 10.82 0 019.646 1a10.82 10.82 0 01-7.8 2.751 10.88 10.88 0 00-.346 2.73c0 5.06 3.461 9.313 8.146 10.519 4.684-1.206 8.146-5.458 8.146-10.519 0-.943-.12-1.857-.346-2.73zM9.646 6.48v1.81m0 3.621h.01"

            />

        </svg>
    </div>
);

export default ShieldExclamationIcon;
