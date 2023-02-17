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
        const res = await axios.get<ISite[]>(`${process.env.REACT_APP_API_URL}/api/sites/`, config)

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
