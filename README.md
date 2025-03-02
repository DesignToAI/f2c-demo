# f2c-demo
> F2C 演示仓库 https://github.com/DesignToAI/f2c-demo

## 运行
> Power by EMPv3
```bash
npm run dev
```


## F2C AI 工作流
>Power by Comate Zulu AI

1. 设计稿地址

https://www.figma.com/design/MQ2VoWnBGngBE1sLd4PdRx/F2C-AI?node-id=7-106&t=3FmOEBRljadaz4FO-4

2. 详细步骤(内部使用，暂未公开)

[F2C Zulu 体验](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/QQPTUHz_DkhmDA)

3. AI Prompt 示例

```md
请帮我优化这个 React 组件的代码，需满足以下所有要求：
1. 结构优化
  * 提取重复的 JSX 结构为独立组件
  * ⚠️ 注意：require() 语句的参数必须是字面量字符串，不能作为变量传递
  * 使用数组映射替代重复的模板代码
  * 优化组件层级和命名
  * 保持原有的渲染结构和层级关系
2. CSS 优化
  * 删除未使用的样式类
  * 合并相似的样式规则
  * 简化选择器命名
  * 必须保留所有 background 相关属性
  * 确保不影响原有样式效果
3. 额外要求
  * 保持所有图片资源的正确引用
  * 确保样式作用域不变
  * 保持原有交互行为
  * 提供优化前后的对比说明
请分别提供：
1. 优化后的 TSX 组件代码
2. 优化后的 SCSS 样式代码
3. 优化内容的详细说明
```