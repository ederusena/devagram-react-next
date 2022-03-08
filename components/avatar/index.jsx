import avatarImg from '../../public/imagens/avatar.svg'

export default function Avatar({ preview }) { 

const getAvatar = src => src && src !== 'undefined' ? src : avatarImg.src

return <img src={getAvatar(preview)} alt="Avatar" className="avatar" />;
}