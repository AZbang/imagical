import styled from 'styled-components'

const Card = styled.div`
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  text-align: center;
  transition: .5s padding;
  box-shadow: 0 2px 10px 0 rgba(0,0,0, .4);

  :hover {
    padding: 5px;
  }
`

export default Card;
