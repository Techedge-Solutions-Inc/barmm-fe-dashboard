interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const AccountManagementIcon: React.FC<Props> = ({
    fill = 'none',
    width = 28,
    height = 36,
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
               
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M8.666 5.208H5.11a3.556 3.556 0 00-3.555 3.555v21.334a3.555 3.555 0 003.555 3.555h17.778a3.556 3.556 0 003.556-3.555V8.763a3.556 3.556 0 00-3.556-3.555h-3.556m-10.666 0a3.556 3.556 0 003.555 3.555h3.556a3.556 3.556 0 003.556-3.555m-10.667 0a3.556 3.556 0 013.555-3.556h3.556a3.556 3.556 0 013.556 3.556m-5.334 12.444h5.333M14 24.763h5.333m-10.666-7.11h.018m-.018 7.11h.018"
            />

        </svg>
    </div>
);

export default AccountManagementIcon;
