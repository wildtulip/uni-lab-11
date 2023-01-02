import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contacts_main'>
      <div className='conctacts_block'>
        <p className='title_contact'>Dodo Socks</p>
        <p className='contact'>⛳️ Львів: Вірменська,30 | Федорова, 2 </p>
        <p className='contact'>⛳️ Київ: Антоновича, 19/21 </p>
        <p className='contact'>✊🏻 Зібрали понад 10 млн для ЗСУ </p>
        <p className='contact'>📩 Пн-Пт з 10:00 до 18:00 </p>
        <p className='contact'>🌎 Замовити по Україні та закордон</p>
      </div>
      <div className='map_container'>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9625933166926!2d24.030827515699883!3d49.84316037939618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add76cfdd6947%3A0x2e81cf37e88bb0b9!2sDodo%20Socks!5e0!3m2!1sen!2suk!4v1672081034694!5m2!1sen!2suk'
            width='600'
            height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='first_map'
          ></iframe>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2174236071446!2d30.511805415689093!3d50.43705069621141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefc702a6b8d%3A0xa106682ec007be66!2sAntonovycha%20St%2C%2019%2F21%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2suk!4v1672081285113!5m2!1sen!2suk'
            width='600'
            height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='second_map'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
