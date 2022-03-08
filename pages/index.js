import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef } from 'react'
import Botao from '../components/botao'
import Avatar from '../components/avatar'
import UploadImagem from '../components/uploadImagem'

export default function Home() {
  const [imagem, setImagem] = useState(null)
  const referenciaInputFather = useRef(null)

  console.log("imagem Page index", imagem)

  return (
    <>
      <h1>Ola mundo!</h1>
      <button onClick={() => referenciaInputFather?.current?.click()}>Upload Imagem</button>

      <UploadImagem
        setImagem={setImagem}
        imagemPreview={imagem?.preview}
        aoSetarReferencia={(ref) => (referenciaInputFather.current = ref)}
      />
      
      <div style={{ width: 200 }}>
        <Avatar src={imagem} />
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
