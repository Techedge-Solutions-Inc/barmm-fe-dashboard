interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const LibraryOutlineIconActive: React.FC<Props> = ({
    fill = '#3D3D3D',
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
                fill={fill}
                fillRule="evenodd"
                d="M10.063.68a1.133 1.133 0 00-1.125 0L1.005 5.214a1.133 1.133 0 00.562 2.117v7.933a1.133 1.133 0 100 2.267h15.867a1.134 1.134 0 000-2.266V7.33a1.133 1.133 0 00.562-2.117L10.063.68zM4.967 8.464a1.133 1.133 0 00-1.133 1.134v3.4a1.133 1.133 0 102.266 0v-3.4a1.133 1.133 0 00-1.133-1.134zm3.4 1.134a1.133 1.133 0 112.267 0v3.4a1.133 1.133 0 11-2.267 0v-3.4zm5.667-1.134A1.133 1.133 0 0012.9 9.598v3.4a1.133 1.133 0 102.267 0v-3.4a1.134 1.134 0 00-1.133-1.134z"
                clipRule="evenodd"

            />

        </svg>
    </div>
);

export default LibraryOutlineIconActive;
