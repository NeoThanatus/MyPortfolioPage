import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


interface SidebarItemProps {
  icon: any; // Você pode ajustar o tipo do ícone conforme necessário
  text: string;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, link }) => (
  <li>
    <a href={link}>
      <span className="icon"><FontAwesomeIcon icon={icon} /></span>
      <span className="item">{text}</span>
    </a>
  </li>
);

const Sidebar: React.FC = () => (
  <ul>
    <SidebarItem icon={faInstagram} text="Instagram" link="https://www.instagram.com/seu_usuario_instagram/" />
    <SidebarItem icon={faLinkedin} text="LinkedIn" link="https://www.linkedin.com/in/seu-usuario-linkedin/" />
    <SidebarItem icon={faTwitter} text="Twitter" link="https://twitter.com/seu_usuario_twitter" />
    <SidebarItem icon={faGithub} text="GitHub" link="https://github.com/seu_usuario_github" />
  </ul>
);

export default Sidebar;
