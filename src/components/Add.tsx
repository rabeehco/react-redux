import React from 'react'
import { useAppDispatch } from '../store/store'
import { addPerson } from '../store/features/personSlice'

function Add() {

    const name = React.useRef<string>('')
    const dispatch = useAppDispatch()

    const handleButtonClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        dispatch(addPerson({ name: name.current }))

    }
    return (
        <div className='border rounded-md p-2 shadow-md m-2'>
            <label >Person Name: </label>
            <input type="text" onChange={e => name.current = e.target.value} className='border rounded-md p-2 mx-2' />
            <button onClick={handleButtonClick} type="submit" className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700">Add Person</button>
        </div>
    )

}

export default Add