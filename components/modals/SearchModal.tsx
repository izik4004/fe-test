import React, { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { RiUserUnfollowLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router'; 

import "./SearchModal.scss";
import { User } from '@/Types'; // Adjust the import path accordingly
import Modal from '../table/Modal';



const SearchModal = () => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleToggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal);
    };

    // const handleViewDetails = () => {
    //     setShowModal(false);
    //     // Save user details to local storage
    //     localStorage.setItem('selectedUser', JSON.stringify(user));
    //     // Navigate to the user details page
    //     router.push('/users/details');
    // };

    return (
        <>
            <div onClick={handleToggleModal} style={{ cursor: 'pointer' }}>
                <IoMdMore size={26} />
            </div>
            {showModal && (
                <Modal show={showModal} onClose={handleToggleModal}>
                    <div className=''>
                        <div className='modal_items' >
                            <FaEye />
                            <p>View Details</p>
                        </div>
                        <div className='modal_items'>
                            <RiUserUnfollowLine />
                            <p>Blacklist User</p>
                        </div>
                        <div className='modal_items'>
                            <GrUserExpert />
                            <p>Activate User</p>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default SearchModal;
