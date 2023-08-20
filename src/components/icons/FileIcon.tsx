interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const FileIcon: React.FC<Props> = ({
    fill = '',
    width = 34,
    height = 34,
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
                d="M11.915 3.778h10.429c.108 0 .216.006.323.02 4.245.276 7.54 3.564 7.555 7.536v11.334c-.015 4.182-3.656 7.562-8.137 7.554h-10.17c-4.481.008-8.123-3.373-8.137-7.556V11.334c.014-4.183 3.656-7.564 8.137-7.556z"
                clipRule="evenodd"
            ></path>
            <path
                fill={fill}
                d="M29.422 12.778a.75.75 0 100-1.5v1.5zm-7.7-.75h-.75c0 .414.336.75.75.75v-.75zm.75-8.23a.75.75 0 00-1.5 0h1.5zm-1.622 14.24a.75.75 0 100-1.5v1.5zm-11.55-1.5a.75.75 0 000 1.5v-1.5zm5.775-4.275a.75.75 0 100-1.5v1.5zm-5.774-1.5a.75.75 0 000 1.5v-1.5zm13.474 13.05a.75.75 0 000-1.5v1.5zM9.3 22.312a.75.75 0 100 1.5v-1.5zm20.12-11.035h-7.699v1.5h7.7v-1.5zm-6.949.75v-8.23h-1.5v8.23h1.5zm-1.622 4.51H9.3v1.5h11.55v-1.5zm-5.775-5.775H9.301v1.5h5.774v-1.5zm7.7 11.55H9.3v1.5h13.474v-1.5z"
            ></path>





        </svg>
    </div>
);

export default FileIcon;
