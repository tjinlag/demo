/* eslint-disable react/prop-types */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function maybeAddClass(classList, className) {
  if (className != null && className !== '') {
    classList.add(...className.split(' '));
  }
}
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
export default class Portal extends React.Component {
  constructor() {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);
    this.state = { hasMounted: false };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.props.container) {
      return;
    }
    this.portalElement = this.createContainerElement();
    document.body.appendChild(this.portalElement);
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({ hasMounted: true }, this.props.onChildrenMount);
  }

  componentDidUpdate(prevProps) {
    const { className } = this.props;
    // update className prop on portal DOM element
    if (this.portalElement != null && prevProps.className !== className) {
      if (prevProps.className != null) {
        this.portalElement.classList.remove(prevProps.className);
      }
      maybeAddClass(this.portalElement.classList, className);
    }
  }

  componentWillUnmount() {
    if (this.portalElement != null) {
      this.portalElement.remove();
    }
  }

  createContainerElement() {
    const { className } = this.props;
    const container = document.createElement('div');
    maybeAddClass(container.classList, className);
    return container;
  }

  render() {
    // Only render `children` once this component has mounted in a browser environment, so they are
    // immediately attached to the DOM tree and can do DOM things like measuring or `autoFocus`.
    // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
    // const {isOn} = this.props;
    const { hasMounted } = this.state;
    const { children } = this.props;
    if (typeof document === 'undefined' || !hasMounted) {
      return null;
    }
    return this.portalElement ? ReactDOM.createPortal(children, this.portalElement) : null;
    // return ReactDOM.createPortal(children, this.portalElement);
  }
}

Portal.defaultProps = {
  container: typeof document !== 'undefined' ? document.body : null,
};
