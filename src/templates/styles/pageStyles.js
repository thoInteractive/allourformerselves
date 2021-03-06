import styled from 'styled-components'

const PageStyles = styled.div`
  .container {
    @media (min-width: 800px) {
      display: flex;
      align-items: flex-start;
    }
  }

  main {
    max-width: 900px;
  }

  h1 {
    padding-bottom: 25px;
  }

  h1 + h2 {
    padding-top: 0;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 13px;
  }

  h3 {
    padding-bottom: 14px;
  }

  a {
    text-decoration: underline;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`

export default PageStyles
