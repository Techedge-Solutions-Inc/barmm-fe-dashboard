interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const UsersIcon: React.FC<Props> = ({
    fill = 'none',
    width = 24,
    height = 19,
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

                fill={'#393939'}
                d="M10.428 4.357a3.857 3.857 0 11-7.714 0 3.857 3.857 0 017.714 0zm10.286 0a3.858 3.858 0 11-7.716 0 3.858 3.858 0 017.716 0zM15.481 18.5c.06-.42.09-.849.09-1.286a8.962 8.962 0 00-1.928-5.567 6.428 6.428 0 019.642 5.567V18.5h-7.804zm-8.91-7.714A6.428 6.428 0 0113 17.214V18.5H.143v-1.286a6.429 6.429 0 016.428-6.428z"
            />

        </svg>
    </div>
);

export default UsersIcon;
