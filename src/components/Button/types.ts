/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/**
 * 按钮大小
 */
export type ButtonSize = 'small' | 'large'

/**
 * 原生类型
 */
export type NativeType = 'button' | 'submit' | 'reset'

/**
 * 按钮实例
 */
export interface ButtonInstance {
    ref: HTMLButtonElement | null
}

/**
 * 按钮属性
 */
export type ButtonProps = {
    type?: ButtonType
    size?: ButtonSize
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    nativeType?: NativeType
    autofocus?: boolean
}