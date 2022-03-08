import avatarImg from '../../public/imagens/avatar.svg'

export default function Avatar(image) { 
console.log('component avatar', image)
const getAvatar = (src) => (src && src !== 'undefined' ? image?.src?.preview : avatarImg.src);

return <img src={getAvatar(image?.src?.preview)} alt="Avatar" className="avatar" />;
}