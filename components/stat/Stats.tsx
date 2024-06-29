// StatCard.tsx
import React from 'react';
import './Stats.scss';

interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    iconStyle: React.CSSProperties; // Add iconStyle prop
}

const Stats: React.FC<StatCardProps> = ({ title, value, icon, iconStyle }) => {
    return (
        <div className="stat-card">
            <div className="stat-card__icon" style={iconStyle}>
                {icon}
            </div>
            <div className="stat-card__info">
                <div className="stat-card__title">{title}</div>
                <div className="stat-card__value">{value}</div>
            </div>
        </div>
    );
};

export default Stats;
