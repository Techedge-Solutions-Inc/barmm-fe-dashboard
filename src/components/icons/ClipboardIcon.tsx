interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const ClipboardIcon: React.FC<Props> = ({
    fill = '#fff',
    width = 13,
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
                d="M5.313 0a1.063 1.063 0 000 2.125h2.125a1.062 1.062 0 000-2.125H5.313z"
            ></path>
            <path
                fill={fill}
                fillRule="evenodd"
                d="M0 3.188a2.125 2.125 0 012.125-2.126A3.187 3.187 0 005.313 4.25h2.125a3.187 3.187 0 003.187-3.188 2.125 2.125 0 012.125 2.125v11.688A2.125 2.125 0 0110.625 17h-8.5A2.125 2.125 0 010 14.875V3.187zm3.188 4.25a1.062 1.062 0 000 2.125h.01a1.062 1.062 0 000-2.126h-.01zm3.187 0a1.062 1.062 0 000 2.125h3.188a1.063 1.063 0 000-2.126H6.374zm-3.188 4.25a1.062 1.062 0 100 2.124h.011a1.062 1.062 0 100-2.124h-.01zm3.188 0a1.062 1.062 0 100 2.124h3.188a1.062 1.062 0 100-2.124H6.374z"
                clipRule="evenodd"
            ></path>

        </svg>
    </div>
);

export default ClipboardIcon;
