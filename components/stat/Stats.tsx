// src/StatCard.tsx
import React from 'react';
import './Stats.scss';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
    return (
        <div className="stat-card">
          
            <div className="stat-card__info">
                <div className="stat-card__icon">{icon}</div>
                <h3 className="stat-card__title">{title}</h3>
                <p className="stat-card__value">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
