import { axiosPost, axiosDelete } from '../service/api.js';

// 프로필 이미지 업로드
export const uploadProfileImage = async ({ file, oldFile }) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('oldFile', oldFile);

  return await axiosPost({ url: 'http://localhost:9000/uploads', data: formData });
};

// 프로필 이미지 삭제
export const deleteProfileImage = async (filename) => {
  return await axiosDelete({ url: 'http://localhost:9000/uploads', data: { filename } });
};
