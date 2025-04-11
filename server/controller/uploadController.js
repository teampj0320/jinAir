import multer from 'multer';
import fs from 'fs';
import path from 'path';

// 싱글이미지 업로드, oldfile 이름은 저장X, 바로 삭제 되도록 함, 원본 파일 이름 변경하여 업로드

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        cb(null, `${timestamp}${ext}`);
    }
});

const upload = multer({ storage }).single("file");

export const fileUpload = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error("업로드 에러:", err);
            return res.status(500).json({ error: "파일 업로드 실패" });
        }

        // oldFile 삭제
        const oldFile = req.body.oldFile;
        if (oldFile) {
            const oldFilePath = path.join("uploads", oldFile);
            if (fs.existsSync(oldFilePath)) {
                try {
                    fs.unlinkSync(oldFilePath);
                    console.log("이전 파일 삭제 완료:", oldFilePath);
                } catch (error) {
                    console.error("이전 파일 삭제 실패:", error);
                }
            }
        }

        // 새 파일 정보 반환
        res.json({
            filename: req.file.filename,          // ex) 1712865378383.jpg
            path: req.file.path,                  // uploads/1712865378383.jpg
            original: req.file.originalname       // 원본 파일명 (사용자 참고용)
        });
    });
};
