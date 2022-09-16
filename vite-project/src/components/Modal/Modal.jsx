import './modal.css'
import { Overlay } from '../Overlay/Overlay'

export function Modal(children, closeModal) {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  );
}