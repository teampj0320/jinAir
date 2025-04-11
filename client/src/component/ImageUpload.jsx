import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({ getFileName }) {
    const [oldFile, setOldFile] = useState("");

    const handleFileUpload = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("oldFile", oldFile); // 이전 파일 전달해서 삭제 처리

        axios
            .post('http://localhost:9000/uploads', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(res => {
                const filename = res.data.filename; // 새로 저장된 파일 이름
                getFileName(filename);              // 부모에 전달
                setOldFile(filename);               // 다음 업로드 때 삭제용으로 저장
            })
            .catch(error => console.error(error));
    };

    return (
        <Form.Control
            type="file"
            onChange={handleFileUpload}
        />
    );
}
