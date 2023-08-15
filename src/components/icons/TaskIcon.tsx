interface Props {
    fill?: string,
    width?: string | number,
    height?: string | number,
    stroke?: string,
    strokeWidth?: number,
    className?: string
}

const TaskIcon: React.FC<Props> = ({
    fill = 'none',
    width = 15,
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
            viewBox="0 0 15 18"
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            {...rest}
        >

            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M5.056 9h5.333m-5.333 3.556h5.333M12.167 17h-8.89A1.778 1.778 0 011.5 15.222V2.778C1.5 1.796 2.296 1 3.278 1h4.965c.236 0 .462.094.628.26l4.813 4.813c.167.167.26.393.26.629v8.52c0 .982-.796 1.778-1.777 1.778z"


            />

        </svg>
    </div>
);

export default TaskIcon;
