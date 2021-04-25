

## 修改记录

- 2021.4.25 优化代码，封装RenderingPipeline类，提供统一接口

- 2021.4.23 
    - 添加WebGL 2选择
    - 完成WebGL 2转换，解决canvas黑屏问题：pipeline 没有更新updatePostProcessingConfig
    - canvas.getContext('2d') 返回undefined：原因是canvas请求了不同类型的上下文，就可能会发生这种情况。
                                             
- 2021.4.22 添加摄像头选择、配置项设置和背景图片切换

- 2021.4.21 初步实现react和webpack关联部分的剥离，摘除主要代码实现背景虚拟处理

- 2021.4.8 first commit

## 使用说明

### 引用文件
```
<script src="public/tflite/tflite.js"></script>
<script src="public/tflite/tflite-simd.js"></script>
<script src="public/src/pipelines.js"></script>
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
    
