import React from 'react'



function Ex1_error_box({ children }) {
    return (
        <div>
            <div className='mb-2'>
                <div className='p-4 bg-red-400  w-1/2 opacity-80 text-white rounded-lg' >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Ex1_error_box