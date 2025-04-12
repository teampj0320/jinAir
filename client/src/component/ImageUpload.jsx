
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function ImageUpload({ getFileName, triggerRef }) {
  const inputRef = useRef();
  const myinfo = useSelector((state) => state.myinfo.myinfo);

  useEffect(() => {
    if (triggerRef?.current) {
      triggerRef.current.onclick = () => inputRef.current?.click();
    }
  }, [triggerRef]);

  const handleFileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    const oldFileName = myinfo.profile_img?.[0]?.split('/').pop();
    formData.append("oldFile", oldFileName);

    axios.post('http://localhost:9000/uploads', formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(res => getFileName(res.data.filename))
    .catch(console.error);
  };

  return (
    <input
      type="file"
      ref={inputRef}
      onChange={handleFileUpload}
      style={{ display: 'none' }}
    />
  );
}
