interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const EditIcon: React.FC<Props> = ({
    fill = '#393939',
    width = 22,
    height = 23,
    stroke = '#736F6F',
    strokeWidth = 1.5,
    className = '',
    ...rest
}) => (

    <div style={{ width, height }} className={className}>
        <svg
            width='100%'
            height='100%'
            viewBox="0 0 22 23"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                fill={fill}
                d="M21.194 1.305a2.75 2.75 0 00-3.888 0L6.875 11.735v3.89h3.889l10.43-10.431a2.75 2.75 0 000-3.889z"
            />
            <path
                fill={fill}
                fillRule="evenodd"
                d="M0 6a2.75 2.75 0 012.75-2.75h5.5a1.375 1.375 0 010 2.75h-5.5v13.75H16.5v-5.5a1.375 1.375 0 012.75 0v5.5a2.75 2.75 0 01-2.75 2.75H2.75A2.75 2.75 0 010 19.75V6z"
                clipRule="evenodd"
            />
        </svg>
    </div>
);

export default EditIcon;
