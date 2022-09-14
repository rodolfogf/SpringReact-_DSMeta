import './styles.css';
import logo from '../../assets/img/logo.svg';

function Header() {
    return(
      <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1> 
            <p>
                Desenvolvido no treinamento da Semana SpringReact
                <p className='links'>github: <a href="https://github.com/rodolfogf">rodolfogf</a></p>
                <p className='links'>Créditos do layout: <a href="https://devsuperior.com.br/">DevSuperior</a></p> 
            </p>
        </div>
    </header>
    )
  }
  
  export default Header;
