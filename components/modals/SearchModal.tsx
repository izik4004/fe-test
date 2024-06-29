import React, { ChangeEvent, useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router'; 
import Image from 'next/image'
import filter from "../../public/filter-results-button.png"


import "./SearchModal.scss";
import { User } from '@/Types'; // Adjust the import path accordingly
import Modal from '../table/Modal';



interface SearchModalProps {
    onFilter: (filters: Partial<User>) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onFilter }) => {
    const [showModal, setShowModal] = useState(false);
    const [filters, setFilters] = useState<Partial<User>>({
        organization: '',
        username: '',
        email: '',
        createdAt: '',
        phone: '',
        status: ''
    });

    const handleToggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleFilter = () => {
        onFilter(filters);
        handleToggleModal();
    };

    const handleReset = () => {
        setFilters({
            organization: '',
            username: '',
            email: '',
            createdAt: '',
            phone: '',
            status: ''
        });
    };

    return (
        <>
            <Image src={filter} alt='logo' width={15} height={15} onClick={handleToggleModal} className='icon' />
            {/* <IoMdMore onClick={handleToggleModal} size={20} className='icon'/> */}
            {showModal && (
                <Modal show={showModal} onClose={handleToggleModal}>
                    <div className='modal_items_wrapper'>
                        <div className='items'>
                            <label>Organization</label>
                            <select name="organization" value={filters.organization || ''} onChange={handleChange} className='select'>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className='items'>
                            <label>Username</label>
                            <input type="text" name="username" value={filters.username || ''} onChange={handleChange} />
                        </div>
                        <div className='items'>
                            <label>Email</label>
                            <input type="text" name="email" value={filters.email || ''} onChange={handleChange} />
                        </div>
                        <div className='items'>
                            <label>Date</label>
                            <input type="date" name="date" value={filters.createdAt || ''} onChange={handleChange} />
                        </div>
                        <div className='items'>
                            <label>Phone Number</label>
                            <input type="text" name="phoneNumber" value={filters.phone || ''} onChange={handleChange} />
                        </div>
                        <div className='items'>
                            <label>Status</label>
                            <select name="status" value={filters.status || ''} onChange={handleChange} className='select'>
                                <option value="">Select</option>

                            </select>
                        </div>
                        <div className='action_buttons'>
                            <button className='reset' onClick={handleReset}>Reset</button>
                            <button className='filter' onClick={handleFilter}>Filter</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default SearchModal;
