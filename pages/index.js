import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef } from 'react'
import Botao from '../components/botao'
import Avatar from '../components/avatar'
import UploadImagem from '../components/uploadImagem'

export default function Home() {
  const [imagem, setImagem] = useState(null)
  const referenciaInput = useRef(null)

  console.log("imagem Page index", imagem)

  return (
    <>
      <h1>Ola mundo!</h1>
      <div style={{ width: 200 }}>
        <button onClick={() => referenciaInput?.current?.click()}>Upload Imagem</button>

        <UploadImagem
          setImagemProp={setImagem}
          imagemPreviewProp={imagem?.preview}
          aoSetarReferencia={(ref) => referenciaInput.current = ref}
        />
         
        <Avatar />
        <Botao
          texto="Login"
          onClick={() => alert('Ahoi')}
          tipo="button"
          cor="secundaria"
          // desabilitado={true}
        />
      </div>
    </>
  );
}
