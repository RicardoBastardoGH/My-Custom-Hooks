import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    // Por defecto lleva un userState

    const isMounted = useRef(true);
    const [state, setstate] = useState({ data:null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setstate({ data:null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                
                if ( isMounted ){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })                        
                }
            })

    }, [url])

    return state;

}
