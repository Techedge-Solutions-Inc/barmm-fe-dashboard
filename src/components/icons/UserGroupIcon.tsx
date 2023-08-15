interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UserGroupIcon: React.FC<Props> = ({
    fill = '#fff',
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
                d="M12.8 3.2a3.2 3.2 0 11-6.4 0 3.2 3.2 0 016.4 0zm5.333 2.133a2.133 2.133 0 11-4.266 0 2.133 2.133 0 014.266 0zM13.867 12.8a4.267 4.267 0 00-8.534 0V16h8.534v-3.2zM5.333 5.333a2.133 2.133 0 11-4.266 0 2.133 2.133 0 014.266 0zM16 16v-3.2a6.37 6.37 0 00-.8-3.1 3.205 3.205 0 014 3.1V16H16zM4 9.7a6.371 6.371 0 00-.8 3.1V16H0v-3.2a3.2 3.2 0 014-3.1z"
            ></path>

        </svg>
    </div>
);

export default UserGroupIcon;
