import React from 'react'
import {Outlet} from 'react-router-dom'

export default function WithOutNav() {
  return (
    <>
       <Outlet/>
    </>
  )
}