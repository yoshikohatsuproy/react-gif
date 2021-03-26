import {useState, useEffect} from 'react';
import { getGift } from '../helpers/getGift';


export const useFetchGifs = (category) =>{

    const [state, setState] = useState ({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGift(category)
            .then( imgs => {
                setState ({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])



    return state;
}