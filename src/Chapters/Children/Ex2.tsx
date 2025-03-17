import React from 'react'

type Props = {}


const Firstchild=({children})=>{
    const childarray=React.Children.toArray(children)
    return(
        <div>
            {childarray[0]}
        </div>
    )
}

const Lastchild=({children})=>{
    const childarray= React.Children.toArray(children)
    return(
        <div>
            {childarray[childarray.length-1]}
        </div>
    )
}

const Lastchildn=({children , n})=>{
    const childarray= React.Children.toArray(children).slice(-n)
    return(
        <div>
            {childarray}
        </div>
    )
}

const Firstchildn=({children , n})=>{
    const childarray= React.Children.toArray(children).slice(0,n)
    return(
        <div>
            {childarray}
        </div>
    )
}


function Ex2({}: Props) {
  return (
    <div>
     <Firstchild>
     <h1>child 1</h1>
     <h1>child 2</h1>
     </Firstchild>

     <Lastchild>
     <h1>child 1</h1>
     <h1>child 2</h1>
     </Lastchild>

     <Lastchildn n={2}>
     <h1>child 1</h1>
     <h1>children 2</h1>
     <h1>children 3</h1>
     <h1>children 4</h1>
     </Lastchildn>

     <Firstchildn n={3}>
     <h1>child 1</h1>
     <h1>child 2</h1>
     <h1>child 3</h1>
     <h1>child 4</h1>
     </Firstchildn>

    </div>
  )
}

export default Ex2