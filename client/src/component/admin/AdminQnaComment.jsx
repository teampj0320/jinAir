import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import '../../scss/haon.scss';

export default function AdminQnaComment() {
    const { qid } = useParams();
    const [formData, setFormData] = useState(); //db 에서 가져온 qna 리스트    
    const [inputData, setInputData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost:9000/chatbot/detail', { "qid": qid })
            .then(res => {
                setFormData(res.data);

            })
            .catch(err => console.log(err));
    }, [qid]);
    // console.log('d', formData);
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleComment = () => {
        axios.post('http://localhost:9000/chatbot/updateComment', { "no": formData.no, inputData })
            .then(res => {
                if (res.data.result_rows === 1) {
                    navigate('/admin/qna');
                } else {
                    alert('에러가 발생하였습니다. 다시 시도해주세요.')
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='admin-qna-comment-all-box'>
            <div>
                {formData ? (
                    <table>
                        <tr>
                            <td>아이디&nbsp;&nbsp;{formData.id}</td>
                            <td>등록일&nbsp;&nbsp;{formData.reg_date}</td>
                        </tr>
                        <tr>
                            <td>문의유형</td>
                            <td>{formData.category}</td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>{formData.title}</td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>{formData.content}</td>
                        </tr>
                        <tr>
                            <td>사진</td>
                            <td><img src={formData.image} alt="" style={{width : '100px'}} /></td>
                        </tr>
                    </table>)
                    : ''}
            </div>
            <div>
                <table>
                    {formData ? (
                        <>
                            <tr>
                                <td>제목</td>
                                <td><input name='title' type="text" onChange={handleInput}
                                    value={formData.adminTitle ? formData.adminTitle : inputData.title} />
                                </td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td><input name='content' type="text" onChange={handleInput}
                                    value={formData.adminContent ? formData.adminContent : inputData.content} />
                                </td>
                            </tr>
                        </>
                    ) : ''}
                </table>
                <div>
                    <button onClick={handleComment}>답변하기</button>
                </div>
            </div>
        </div>
    );
}


