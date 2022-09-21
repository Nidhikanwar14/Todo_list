import {css} from "styled-components";

export const configureFlex = (

    direction : 'row',
    justifyContent = 'center',


) => css`
    ${direction === 'row' ? row() : column()}
     flex-direction : ${direction};
     justify-content: ${justifyContent};
  
`

const row = () => css`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const column = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const height = (height = 4) => css`
    height: ${height}rem;
`

const width = (width = 4) => css`
    height: ${width}rem;
`

const top = (marginTop = 0) =>
    css`
    margin-top: ${marginTop}rem;
  `;
const bottom = (marginBottom = 0) =>
    css`
    margin-bottom: ${marginBottom}rem;
  `;

const left = (marginLeft = 0) =>
    css`
    margin-left: ${marginLeft}rem;
  `;

const right = (marginRight = 0) =>
    css`
    margin-right: ${marginRight}rem;
  `;

const rowCenter = () =>css`
    ${configureFlex('row', 'center')}
`
export default {
size: {
    height,
    width,
},
    margin : {
        top,
        bottom,
        left,
        right,
    },
    flexConfig : {
        row,
        column,
        rowCenter
    },

}