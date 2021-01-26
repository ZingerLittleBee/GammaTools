/**
 * @Description: 感谢 https://medium.com/dailyjs/13-javascript-one-liners-thatll-make-you-look-like-a-pro-29a27b6f51cb
 * @author ZingerLittleBee
 * @date 2021/1/25
*/

import { Stack } from './data-structure/Stack'

/**
 * 获取随机布尔值
 * @returns {boolean}
 */
const randomBoolean = (): boolean => Math.random() >= 0.5

/**
 * 检查传入的日期是否为工作日
 * @param date 待检查日期
 * @returns {boolean}
 */
const isWeekday = (date: Date): boolean => date.getDay() % 6 !== 0

/**
 * 反转字符串
 * @param str 待反转字符串
 * @returns {string}
 */
const reverse = (str: string): string => str.split('').reverse().join('')

/**
 * 检查数字是否为偶数
 * @param num 待检查数字
 * @returns {boolean}
 */
const isEven = (num: number): boolean => num % 2 === 0

/**
 * 从 Date() 中获取时间
 * @param date Date 类型数据
 * @returns {string}
 */
const timeFromDate = (date: Date): string => date.toTimeString().slice(0, 8)

/**
 * 保留小数的 n 位数,非四舍五入
 * ~~1.1 -> 1, ~~-1.1 -> -1, ~~true -> 1, ~~false -> 0
 * @param n 小数
 * @param fixed 位数
 */
const toFixed = (n: number, fixed: number): number => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

/**
 * 判断当前用户是否为苹果设备
 * `navigator.platform` 输出平台信息
 */
const isAppleDevice = !typeof window ?? /Mac|ipod|iphone|ipad/.test(navigator.platform)

/**
 * 滚动到页面顶部
 * IE 不支持 scrollTo
 */
const goToTop = () => window.scrollTo(0, 0)

/**
 * 获取参数平均值
 * @param args
 */
const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length

/**
 * 摄氏度转华氏度
 * @param celsius 摄氏度
 */
const celsiusToFahrenheit = (celsius: number): number => celsius * 9/5 + 32;

/**
 * 华氏度转摄氏度
 * @param fahrenheit 华氏度
 */
const fahrenheitToCelsius = (fahrenheit: number): number => (fahrenheit - 32) * 5/9;


export {
    randomBoolean,
    isWeekday,
    reverse,
    isEven,
    timeFromDate,
    toFixed,
    isAppleDevice,
    goToTop,
    average,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    Stack
}
