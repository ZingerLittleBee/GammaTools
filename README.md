# GammaTools
Tools for JavaScript base on TypeScript

<details>
    <summary>Useages</summary>

    `ES`
    `import {  } from 'gammatools' `
    
    `Node`
    `const {  } = require('gammatools')`

</details>

<details>
    <summary>Methods</summary>

    ### 获取随机布尔值
    - 方法名: randomBoolean
    - 参数: 空
    - 返回值: Boolean
    
    ### 检查传入的日期是否为工作日
    - 方法名: isWeekday
    - 参数: Date
    - 返回值: Boolean
    
    ### 反转字符串
    - 方法名: reverse
    - 参数: String
    - 返回值: Boolean
    
    ### 检查是否为偶数
    - 方法名: isEven
    - 参数: Number
    - 返回值: Boolean
    
    ### 从 Date() 中获取时间
    - 方法名: timeFromDate
    - 参数: Date
    - 返回值: String
    
    ### 保留小数的 n 位数,非四舍五入
    - 方法名: toFixed
    - 参数: Number, fixed(小数保留位数)
    - 返回值: String
    
    ### 判断当前用户是否为苹果设备
    - 方法名: isAppleDevice
    - 参数: 空
    - 返回值: Boolean
    
    ### 滚动到页面顶部
    - 方法名: goToTop
    - 参数: 空
    - 返回值: 无
    
    ### 获取参数平均值
    - 方法名: goToTop
    - 参数: Number[]
    - 返回值: Number
    
    ### 摄氏度转华氏度
    - 方法名: celsiusToFahrenheit
    - 参数: Number(摄氏度)
    - 返回值: Number(华氏度)
    
    ### 华氏度转摄氏度
    - 方法名: fahrenheitToCelsius
    - 参数: Number(华氏度)
    - 返回值: Number(摄氏度)

</details>

<details>
    <summary>DataStructure</summary>

    <details>
        <summary>栈 Stack</summary>

        ### 构造函数
        - 参数: Array(可选)
        - 示例: let stack = new Stack()
        
        ### 获取栈元素长度
        - 方法名: getSize
        - 参数: 空
        - 返回值: Number
        
        ### 判断栈是否为空
        - 方法名: isEmpty
        - 参数: 空
        - 返回值: Boolean
        
        ### 入栈
        - 方法名: push
        - 参数: 泛型
        - 返回值: Void
        
        ### 出栈
        - 方法名: pop
        - 参数: 空
        - 返回值: 泛型
        
        ### 查看栈顶元素
        - 方法名: peek
        - 参数: 空
        - 返回值: 泛型
        
        ### 格式化输出
        - 方法名: toString
        - 参数: 空
        - 返回值: String
    </details>
</details>
