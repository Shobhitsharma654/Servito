import React from 'react'

const AddAddress = () => {

    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='mt-16 pb-16'>
<p className='text-2xl md:text-3xl text-gray-500 '>Add <span className='font-semibold text-primary'>New Address</span></p>
<div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
<div className='flex-1 max-w-md'>
    <form onSubmit={onSubmitHandler}></form>


</div>
<img src="" alt="Add Address" />

</div>

    </div>
  )
}

export default AddAddress