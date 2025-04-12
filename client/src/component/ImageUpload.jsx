import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function ImageUpload({ getFileName }) {
  const myinfo = useSelector((state) => state.myinfo.myinfo);

  const handleFileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    const oldFileName = myinfo.profile_img?.[0]?.split('/').pop();
    formData.append("oldFile", oldFileName);

    axios
      .post('http://localhost:9000/uploads', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(res => {
        getFileName(res.data.filename); 
      })
      .catch(error => console.error(error));
  };

  return (
    <Form.Control type="file" onChange={handleFileUpload} />
  );
}
