
function convolveImage(src, kernel , form_sum, normalize) {
    // 存储卷积操作的结果。
    let dst = new cv.Mat();
    // 指定了输出图像的类型，-1代表继承原图位深
    let ddepth = -1;
    // 从数组创建卷积核
    let kernelMat = cv.matFromArray(3, 3, cv.CV_32F, kernel);
    // 定义卷积核的锚点。(-1, -1)表示锚点位于卷积核的中心。
    let anchor = new cv.Point(-1, -1);
    // 添加到边界像素的值
    let delta = 0;

    // 如果normalize为true，则进行归一化处理
    if (normalize) {
        for (let i = 0; i < kernel.length; i++) {
            kernel[i] /= form_sum;
        }
        kernelMat = cv.matFromArray(3, 3, cv.CV_32F, kernel);
    }

    // 卷积操作
    cv.filter2D(src, dst, ddepth, kernelMat, anchor, delta, cv.BORDER_DEFAULT);
    return dst;
}