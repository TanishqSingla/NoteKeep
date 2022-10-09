import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.Footer}>
      <div>Made By: Tanishq</div>
      <div className="socials">
        <ul>
          <li>Github: </li>
          <li>Twitter: </li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
