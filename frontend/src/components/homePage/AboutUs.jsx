import React from 'react';
import temple from '../../assets/ayodhya.jpg';
export default function AboutUs() {
  return (
    <>
      <div className='h-[570px] w-full flex '>
        <div className='w-4/5 h-full flex flex-col items-center gap-[50px] pt-[25px]'>
          <h1 className='text-[50px] border-b border-orange-500'>
            About the Temple
          </h1>
          <p className='pl-[100px] pr-[70px] leading-8'>
            The Ram Mandir is a temple that is dedicated to Lord Ram. It is
            located in the city of Ayodhya in the state of Uttar Pradesh, India.
            The temple is one of the most important pilgrimage sites for Hindus
            and is considered to be one of the holiest places in the religion.
            The temple is known for its beautiful architecture and is visited by
            millions of devotees every year. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolores asperiores praesentium quas
            repellendus laboriosam quos earum enim dolorem iusto autem fugit
            similique odit dolore eum assumenda dicta nesciunt architecto,
            maxime modi facere! Maxime recusandae voluptate magni accusamus
            deleniti error aperiam voluptatum expedita eos quisquam
            exercitationem quibusdam, ullam saepe nesciunt hic voluptatem,
            voluptatibus nihil, perferendis ducimus dignissimos aliquam
            reiciendis modi pariatur. Sed illum similique quam aliquam incidunt
            laboriosam distinctio temporibus quas rerum laudantium magnam
            perferendis provident beatae alias repudiandae ad perspiciatis
            dolorem, voluptatibus illo dignissimos doloremque, aut natus.
            Voluptas voluptatum numquam nisi ratione aspernatur quis nostrum
            incidunt consequatur ut mollitia. Est.
          </p>
        </div>
        <div className='h-[500px] w-1/5 flex items-center justify-center pr-10'>
          <img className='h-[200px] w-full' src={temple} alt='' />
        </div>
      </div>
    </>
  );
}
