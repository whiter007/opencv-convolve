function img_process() {
    // 确保OpenCV已经加载(错误处理)
    if (cv && cv.imread && imgElement) {
        // 读取表单数据
        let array3x3 = [];
        let form_sum = 0;
        for (let i = 1; i <= 9; i++) {
            array3x3.push(document.getElementById('input' + i).value);
            form_sum += parseFloat(document.getElementById('input' + i).value);
        }
        console.log(form_sum);

        let src = cv.imread(imgElement);

        // 进行图像进行卷积操作
        src = convolveImage(src, array3x3, form_sum, getNormalizationStatus());

        // 将处理后的图像显示在canvas上
        cv.imshow('imageDest', src);
        // ctx.drawImage(src, 0, 0, src.width, src.height);
    } else {
        console.error('OpenCV未加载或imgElement未定义');
    }
}
