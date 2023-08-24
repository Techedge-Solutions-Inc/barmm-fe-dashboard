'use client';
import React, { useEffect, useRef } from 'react';
import QRCodeStyling from "qr-code-styling";

interface QRCodeProps {
    url?: string;
}

const qrCode = new QRCodeStyling({
    width: 132,
    height: 132,
    image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/368176763_309892148196176_2780793931213234649_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH9LLB-jJgqN1oACYZpXHMmJyuv1GUkXu8nK6_UZSRe79J7pesQ-uKkMQyVDF3dbhtdM902nohYNMzb2W4gmJH7&_nc_ohc=c-XdWGTT_ggAX8lqtp6&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdSA2woWWrkJ7Dbe5vbceuSbHJrHxlDH81IWnUaGFIJ6Mg&oe=650E4350",
    dotsOptions: {
        color: "#000000",
        type: "rounded"
    },
    cornersSquareOptions: {
        color: "#000000",
        type: "extra-rounded"
    },
    cornersDotOptions: {
        color: "#009865",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 4
    }
});

const QRCode: React.FC<QRCodeProps> = ({
    url
}) => {
    console.log(url);
    const ref = useRef(null);

    useEffect(() => {
        qrCode.append(ref.current!);
      }, []);

    useEffect(() => {
        qrCode.update({
            data: url
        });
    }, [url]);

    return (
        <div className='flex items-center justify-center'>
            <div ref={ref} />
        </div>
    )
}

export default QRCode;
