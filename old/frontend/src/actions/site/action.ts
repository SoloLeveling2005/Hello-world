import { GetSitesFail, GetSitesSuccess, SiteActionTypes } from "./types";
import { Dispatch } from 'redux';
import axios from 'axios'
import { ISite } from "../../types";


export const getSites = () => async (dispatch: Dispatch<GetSitesSuccess | GetSitesFail>) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    try {
// <<<<<<< HEAD
        const res = await axios.get<ISite[]>(`/api/sites/`, config)
// =======
        // const res = await axios.get<ISite[]>(`${process.env.REACT_APP_API_URL}/api/sites/`, config)
// >>>>>>> 3ab95b6e45477809a8ece2a9089eeae4bb735027

        if(res.status === 200) {
            dispatch({
                type: SiteActionTypes.GET_SITES_SUCCESS,
                payload: res.data
            })
        } else {
            console.log((await res).data)
            dispatch({
                type: SiteActionTypes.GET_SITES_FAIL
            })
        }
    } catch (err) {
        console.log(err)
        dispatch({
            type: SiteActionTypes.GET_SITES_FAIL
        }) 
    }
}
