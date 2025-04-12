import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { db } from '../repository/db.js'; // DB 연결

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/'); // 저장 폴더
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        cb(null, `${timestamp}${ext}`);
    }
});

const upload = multer({ storage }).single("file");

export const fileUpload = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error("업로드 에러:", err);
            return res.status(500).json({ error: "파일 업로드 실패" });
        }

        // ✅ 기존 이미지 삭제
        const oldFile = req.body.oldFile;
        if (oldFile) {
            const oldFilePath = path.join("images", oldFile);
            if (fs.existsSync(oldFilePath)) {
                try {
                    fs.unlinkSync(oldFilePath);
                    console.log("이전 파일 삭제 완료:", oldFilePath);
                } catch (error) {
                    console.error("이전 파일 삭제 실패:", error);
                }
            }
        }

        // ✅ 새 이미지 경로 구성 및 DB 업데이트
        const newPath = `/images/${req.file.filename}`;
        await db.execute(
            `UPDATE customer SET profile_img = JSON_ARRAY(?) WHERE id = 'test1'`,
            [newPath]
        );

        // ✅ 클라이언트로 응답
        res.json({
            success: true,
            filename: req.file.filename,
            imagePath: newPath,
            original: req.file.originalname
        });
    });
};
