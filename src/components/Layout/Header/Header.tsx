import style from './Header.module.css'

function Header() {
  return (
    <header className={style.Header}>
      <h1 className={style.Logo}>NoteKeep</h1>
      <p className={style['Logo-subtitle']}>A simple note taking app</p>
    </header>
  );
}

export default Header;
