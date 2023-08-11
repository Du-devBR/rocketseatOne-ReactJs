import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1.25rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${props => props.theme['gray-100']};

      border-top: solid 3px transparent;
      border-bottom: solid 3px transparent;
      transition: 0.5s;

      &:hover{
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
        transition: 0.5s;
      }

      &.active {
        color: ${props => props.theme['green-500']};
      }
    }
  }
`
