import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
   
    const phoneNumber = '6378822375';
    const message = 'Hello, I would like to inquire about your services.'; 

 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <div className='fixed bottom-0 right-0 z-40 m-5'>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Image src="/image/whatsapp.webp" alt='WhatsApp' width={50} height={50} />
                </a>
            </div>
        </>
    );
}
