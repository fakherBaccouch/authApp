import axios from 'axios'
import React, { useContext, useState, useEffect } from "react"

const instance = axios.create(
    {
        baseURL: "https://auth-dev-e236f.firebaseio.com",

    }
)
export default instance
