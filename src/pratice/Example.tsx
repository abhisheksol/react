import React, { useContext } from 'react'
import { abhiContext } from './Usecontext'



function Example() {
    const { myname } = useContext(abhiContext)
    return (
        <div>
            <div>
                hello {myname}
            </div>
        </div>
    )
}

export default Example