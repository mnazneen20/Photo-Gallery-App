import React from 'react'

export default function Searchbar(props) {
    const [input, setinput] = React.useState('')
    function handlesubmit(e) {
        e.preventDefault();
        props.controlsearchvalue(input)
    }
  return (
    <div className='searchbar'>
        <form onSubmit={handlesubmit}>
            <input onChange={(e) => setinput(e.target.value)} type="text" placeholder='Search here...' />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}
