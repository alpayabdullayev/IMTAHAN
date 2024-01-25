import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [localData, setlocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [])


    useEffect(() => {
            localStorage.setItem(key,JSON.stringify(localData))
    }, [localData])
    

    function handleData(data) {
        setlocalData(data)
    }

    return [localData , handleData]
}

export default useLocalStorage