import './Header.css'
import logo from '../../assets/images/logo.png'
import createIcon from '../../assets/images/create.png'


export function Header() {
  return (
    <div className='header'>
      <div className='row'>
        <div className="Logo">
          <img src={logo} width='70px' alt='Logo Cavaleiros do Zodiaco' className='Logo__icone' />
          <span className='Logo__titulo'>Cavaleiros do Zodiaco</span>
        </div>
        <div className="btn-create-icon">
          <img src={createIcon} alt="botão de criar um cavaleiro" className='Create__icone' width='40px' />
        </div>
      </div>
    </div>
  )
}