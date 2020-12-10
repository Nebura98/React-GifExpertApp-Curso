import {useState,useEffect} from 'react'
import { getGifts } from '../helpers/getGifs';
// Esto es un custom hook
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // Esto permite que el componente se renderice por primera vez o cuando se agrege una nueva categoria.
    useEffect( ()=> {
        getGifts(category)
        .then(imgs => {
           
            setstate({
                data: imgs,
                loading: false
            })
        })
        .catch(console.log)
    }, [category]) //Segundo parametros es un arreglo de dependencias.

    return state; // {data:[],loading:true}
}
