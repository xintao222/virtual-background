

## 修改记录

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


## FAQ

- 1.生成后的canvas人像显示尺寸比较小，与img不一致
    - 原因：canvas的样式的height和width跟sourcePlayback设置可能不一样
    
- 2.tflite `RuntimeError: memory access out of bounds`
    - 原因：没有调用`newSelectedTFLite._loadModel(model.byteLength)` 等方法
