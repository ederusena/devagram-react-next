import { useRef, useEffect } from 'react';

export default function UploadImagem({
  className = '',
  setImagem,
  imagemPreview,
  imagemPreviewClassname = '',
  aoSetarReferencia,
}) {
  const referenciaInput = useRef(null);

  useEffect(() => {
    if (!aoSetarReferencia) {
      return;
    }
    aoSetarReferencia(referenciaInput?.current);
  }, [referenciaInput?.current, aoSetarReferencia]);

  const abrirSeletorDeArquivos = () => {
    referenciaInput?.current?.click();
  };

  const aoAlterarImagem = () => {
    console.log('aoAlterarImagem');
    if (!referenciaInput?.current?.files?.length) {
      return;
    }

    const arquivo = referenciaInput?.current?.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(arquivo);
    fileReader.onloadend = () => {
      setImagem({
        preview: fileReader.result,
        arquivo,
      });
    };
  };

  return (
    <div className={`upload__imagem-container ${className}`} onClick={abrirSeletorDeArquivos}>
      {imagemPreview && (
        <div className="imagem__preview-container">
          <img src={imagemPreview} alt="ImagemPreview" className={imagemPreviewClassname} />
        </div>
      )}

      <input
        type="file"
        accept="image/* "
        className="oculto"
        ref={referenciaInput}
        onChange={aoAlterarImagem}
      />
    </div>
  );
}
