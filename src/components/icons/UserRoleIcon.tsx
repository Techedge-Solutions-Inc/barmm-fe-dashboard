interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserRoleIcon: React.FC<Props> = ({
    fill = '#3D3D3D',
    width = 20,
    height = 16,
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
                d="M9.143 3.429a3.429 3.429 0 11-6.857 0 3.429 3.429 0 016.857 0zm9.143 0a3.429 3.429 0 11-6.858 0 3.429 3.429 0 016.858 0zM13.634 16c.053-.374.08-.754.08-1.143A7.966 7.966 0 0012 9.91a5.715 5.715 0 018.571 4.948V16h-6.937zm-7.92-6.857a5.714 5.714 0 015.715 5.714V16H0v-1.143a5.714 5.714 0 015.714-5.714z"
            ></path>

        </svg>
    </div>
);

export default UserRoleIcon;
