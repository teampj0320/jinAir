import * as repository from '../repository/paymentRepository.js';

/***************************** 
 * Reservation 
*****************************/

export const payment = (req, res) => {
    repository.payment(req.body)
        .then(result => {
            res.json({ success: true, data: result });
        })
        .catch(error => {
            // 에러 메시지 전달
            res.status(500).json({
                success: false,
                message: error.message || '예약 처리 중 오류가 발생했습니다.'
            });
        });
};