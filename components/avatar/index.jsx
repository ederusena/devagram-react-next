import avatarImg from '../../public/imagens/avatar.svg'

export default function Avatar({ src}) { 

const getAvatar = src => src && src !== 'undefined' ? src : avatarImg.src

return (
  <img src={getAvatar(src)} alt="Avatar" className='avatar' />
)
}