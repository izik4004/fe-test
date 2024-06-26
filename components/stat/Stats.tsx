// Stats.tsx
import React from 'react';
import './Stats.scss';
import Image, { StaticImageData } from 'next/image'

interface StatsProps {
    count: number;
    iconUrl: string | StaticImageData;
}

const Stats: React.FC<StatsProps> = ({ count, iconUrl }) => {
    return (
        <div className="stats">
            <div className="icon">
                <Image src={iconUrl} alt="Icon" width={ 20} height={20} />
            </div>
            <div className="count">
                <span>{count}</span>
            </div>
        </div>
    );
};

export default Stats;
