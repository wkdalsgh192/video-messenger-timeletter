import React, { useState } from 'react'

function GroupCreate() {
    const [name, setName] = useState([''])
    const [email, setEmail] = useState([''])
    const [photo, setPhoto] = useState([''])
    const [description, setDescription] = useState([''])

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onDiscriptionHandler = (event) => {
        setDescription(event.currentTarget.value);
    }

    return (
        <div>
            <div>
                그룹이름 
                <input placeholder="이름" onChange={onNameHandler}/>
            </div>

            <div>
                멤버추가 
                <input placeholder="회원의 이메일" onChange={onEmailHandler}/>
                <button>검색</button>
            </div>

            <div>
                사진등록 
                <input type="file"/>
            </div>

            <div>
                그룹설명 
                <input placeholder="내용" onChange={onDiscriptionHandler}/>
            </div>

            <button>그룹 생성</button>
        </div>
    )
}

export default GroupCreate
