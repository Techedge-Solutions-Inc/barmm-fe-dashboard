interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserCircleOutlineActive: React.FC<Props> = ({
    fill = '#3D3D3D',
    width = 18,
    height = 18,
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
                fillRule="evenodd"
                d="M17.633 9.086a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zm-6.375-3.188a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zm-2.125 4.25a5.313 5.313 0 00-4.83 3.099 6.36 6.36 0 004.83 2.214 6.36 6.36 0 004.83-2.214 5.312 5.312 0 00-4.83-3.099z"
                clipRule="evenodd"


            />

        </svg>
    </div>
);

export default UserCircleOutlineActive;
