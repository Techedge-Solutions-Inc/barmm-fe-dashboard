interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const FolderOpenIcon: React.FC<Props> = ({
    fill = 'none',
    width = 68,
    height = 54,
    stroke = '#BFBFBF',
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
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.143 52.031A7.143 7.143 0 012 44.888V9.174a7.143 7.143 0 017.143-7.143h14.286l7.142 7.143h14.286A7.143 7.143 0 0152 16.317v3.571M9.143 52.031h50a7.143 7.143 0 007.143-7.143V27.031a7.143 7.143 0 00-7.143-7.143H23.429a7.143 7.143 0 00-7.143 7.143v17.857a7.143 7.143 0 01-7.143 7.143z"
                
            />

        </svg>
    </div>
);

export default FolderOpenIcon;
