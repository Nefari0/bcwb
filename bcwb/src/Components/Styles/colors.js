import { css } from 'styled-components'

export const colors = {
    baseColor:'#003300',
    secondaryColor:'#4BA347',
    lightPaper:'#EFFDEC',
    yellowPaper:'#FFFBCE',
    white:'#fff',
    darkText:'#555',
    tags:'#E67E22'
}

export const baseGradient = css`
    background: linear-gradient(0deg,${colors.baseColor},${colors.secondaryColor});
`
export const secondaryGradient = css`
    background: linear-gradient(0deg,${colors.secondaryColor},${colors.lightPaper});
`

// *** JSX GRADIENTS *** //
export const secondaryGradientJSX = {
    background: `linearGradient(0deg,${colors.secondaryColor},${colors.lightPaper})`
}
