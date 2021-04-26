import React, { useState } from 'react'
function GroupItem() {
    const [items, setItems ] = useState(['첫번째 예시', '두번째 예시'])
    
    const item = items.map((i) => (
        <div>{i}</div>
    ))
    return (
        <div>
            {item}
        </div>
    )
}

export default GroupItem
