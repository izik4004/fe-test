import React from 'react';
import './PersonalInfo.scss';

interface InfoItem {
    label: string;
    value: string;
}

interface PersonalInfoProps {
    data: InfoItem[];
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
    return (
        <section className="personal-info">
            <h2>Personal Information</h2>
            <div className="info-grid">
                {data.map((item, index) => (
                    <div className="info-item" key={index}>
                        <h3>{item.label}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalInfo;
