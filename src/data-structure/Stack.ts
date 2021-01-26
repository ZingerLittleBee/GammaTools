export class Stack<E> {
    /**
     * 基于数组类型实现
     * @private
     */
    private arr: E[]

    /**
     * 可选构造参数
     * @param arr 数组类型
     */
    constructor(arr?: E[]) {
        if (arr === undefined) {
            this.arr = []
        } else {
            this.arr = arr
        }
    }

    /**
     * 获取栈的长度
     */
    getSize(): number {
        return this.arr.length
    }

    /**
     * 判断栈是否为空
     */
    isEmpty(): boolean {
        return this.arr.length === 0
    }

    /**
     * 入栈
     * @param e
     */
    push(e: E) {
        this.arr.push(e)
    }

    /**
     * 出栈
     */
    pop(): E | undefined {
        if (!this.isEmpty()) {
            return this.arr.pop()
        }
        throw 'stack is empty!'
    }

    /**
     * 返回栈顶元素
     */
    peek(): E {
        if (!this.isEmpty()) {
            return this.arr[this.getSize() - 1]
        }
        throw 'stack is empty!'
    }

    /**
     * 格式化输出
     */
    toString() {
        return `Stack [ ${this.arr} ] top`
    }
}
