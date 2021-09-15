import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from './Constants'

export async function useAPI(endpoint, method, data, params) {
    let resdata, error, loading = true;
    await axios.request({
        method: method,
        url: BASE_URL + endpoint,
        data: data,
        params: params
    }).then((res) => {
        resdata = res;
        loading = false;
    }).catch((err) => {
        error = err;
    })

    return {
        data: resdata, loading: loading, error: error
    }

}
