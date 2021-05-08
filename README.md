
## 使用说明

### 引用文件
```
<script src="lib/tflite/tflite.js"></script>
<script src="lib/tflite/tflite-simd.js"></script>
<script src="lib/tflite/pipelines.js"></script>
```

## 参考

- 在线演示 demo： https://volcomix.github.io/virtual-background/
- github: https://volcomix.github.io/virtual-background
- TensorFlow实现：图像分割中，抠图和替换背景是怎样完成的：https://blog.csdn.net/yuanyuneixin1/article/details/105902428

## FAQ

- 1.生成后的canvas人像显示尺寸比较小，与img不一致
    - 原因：canvas的样式的height和width跟sourcePlayback设置可能不一样
    
- 2.tflite `RuntimeError: memory access out of bounds`
    - 原因：没有调用`newSelectedTFLite._loadModel(model.byteLength)` 等方法

- 3.canvas2dCpu配置处理后的结果是 一个image+一个canvas，两个是单独的，这样重新从canvas里面取流就取不到背景图片

- 4.webGL2处理后是单独的canvas，不需要叠加img，但它使用的是openGL算法，需要测试其兼容性

- 5.Uncaught (in promise) RuntimeError: abort(CompileError: WebAssembly.instantiate(): expected magic word 00 61 73 6d, found 41 47 46 7a @+0). Build with -s ASSERTIONS=1 for more info.
    - 原因：wasm 文件不正确

- 6.INVALID_VALUE: tex(Sub)Image2D: video visible size is empty
    - Cause: video没有play
