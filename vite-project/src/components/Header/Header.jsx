import './Header.css'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className='header'>
      <div className='row'>
        <div className="Logo">
          <img src={logo} width='70px' alt='Logo Cavaleiros do Zodiaco' className='Logo__icone' />
          <span className='Logo__titulo'>Cavaleiros do Zodiaco</span>
        </div>
      </div>
    </div>
  )
}