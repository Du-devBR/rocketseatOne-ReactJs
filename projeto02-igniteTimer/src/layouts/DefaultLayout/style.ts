import  styled   from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  background: ${props => props.theme['gray-800'] };
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`
