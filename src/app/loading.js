import React from "react"
import './styles.css'
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="loading-container"><div className="lds-ripple"><div></div><div></div></div></div>
  }
 