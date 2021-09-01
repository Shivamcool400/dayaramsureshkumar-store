import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>&copy; {new Date().getFullYear()}
      <span>DAYA RAM SURESH KUMAR STORE</span>
    </h5>
    <h5>All Rights reserved</h5>
    <h5>Developer Shivam Gupta</h5>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: /* var(--clr-primary-5) */#6da3b3;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
