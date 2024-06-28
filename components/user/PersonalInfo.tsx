import React from 'react';
import './PersonalInfo.scss';

interface PersonalInfoProps {
    data: { label: string; value: string | number }[];
}


const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
    return (
        <section className="personal-info">
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
