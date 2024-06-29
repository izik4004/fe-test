import React from 'react';
import './PersonalInfo.scss';

interface PersonalInfoProps {
    data: { label: string; value: string | number }[];
    title: string
}


const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, title }) => {
    return (
        <section className="personal-info">
            <h2>{title}</h2>
            <div className="info-grid">
                {data?.map((item, index) => (
                    <div className="info-item" key={index}>
                        <h3>{item.label.toUpperCase()}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalInfo;
