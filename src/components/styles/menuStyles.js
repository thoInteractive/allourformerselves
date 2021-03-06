import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuStyles = styled.div`
  .menu {
    display: block;
    border: none;
    position: absolute;
    margin: 0;
    padding: 0;
    width: 28px;
    height: 18px;
    top: 50%;
    left: 30px;
    transform: translate3d(0, -50%, 0);
    cursor: pointer;

    &::before {
      position: absolute;
      content: '';
      height: 1px;
      left: 0;
      top: 0;
      width: 100%;
      background-color: #333;
      transform: ${props =>
        props.showMenu ? 'rotate(45deg) translate3d(6px, 6px, 0)' : 'none'};
      transition: transform var(--transition-duration) var(--transition-bezier);
    }

    &::after {
      position: absolute;
      content: '';
      height: 1px;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #333;
      transform: ${props =>
        props.showMenu ? 'rotate(-45deg) translate3d(6px, -6px, 0)' : 'none'};
      transition: transform var(--transition-duration) var(--transition-bezier);
    }
  }

  .menu__middle {
    position: absolute;
    content: '';
    height: 1px;
    top: 50%;
    width: 100%;
    transform: translate3d(0, -50%, 0);
    background-color: #333;
    transition: opacity var(--transition-duration) var(--transition-bezier);
    opacity: ${props => (props.showMenu ? 0 : 1)};
    pointer-events: none;
  }

  .mask__content {
    height: 100%;
    width: 100%;
  }

  .mask {
    position: fixed;
    top: var(--header-height);
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity ${props => props.animationDuration / 1000}s ease-out;
  }

  .mask-enter {
    opacity: 0;
  }

  .mask-enter-active {
    opacity: 1;
  }

  .mask-exit {
    opacity: 1;
  }

  .mask-exit-active {
    opacity: 0;
  }

  nav {
    position: absolute;
    padding: 0;
    left: 0;
    top: calc(100% + 1px);
    height: calc(100vh - var(--header-height));
    width: 100%;
    background: #111;

    @media (min-width: 800px) {
      width: 300px;
    }
  }

  nav > a {
    user-select: none;
    color: #ccc;
    display: block;
    font-weight: 300;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 15px 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.5s ease;
  }

  nav > a:hover {
    color: white;
  }

  .slide-right {
    transition: transform ${props => props.animationDuration / 1000}s
      var(--transition-bezier);
  }

  .slide-right-enter {
    transform: translateX(-100%);
  }

  .slide-right-enter-active {
    transform: translateX(0);
  }

  .slide-right-exit {
    transform: translateX(0);
  }

  .slide-right-exit-active {
    transform: translateX(-100%);
  }
`

MenuStyles.propTypes = {
  animationDuration: PropTypes.number,
  showMenu: PropTypes.bool,
}

MenuStyles.defaultProps = {}

export default MenuStyles
