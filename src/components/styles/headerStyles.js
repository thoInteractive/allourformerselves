import styled from 'styled-components'

const HeaderStyles = styled.header`
  .container {
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: white;
  }

  .logo-link {
    display: block;
  }

  .logo {
    width: 100px;
    justify-self: center;
    margin: 24px 0;
  }

  .snipcart-checkout {
    position: absolute;
    width: 28px;
    height: 28px;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export default HeaderStyles
