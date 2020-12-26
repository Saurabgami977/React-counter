import React from 'react';
import { useState, useEffect } from "react";

export default function Time() {
    const [time, settime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (Number(time) < 20) {
                settime(Number(time) + 1)
            } else if (Number(time) >= 20 && Number(time) <= 28) {
                settime(Number(time) + 2)
            }
        }, 1000)
    })
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}
