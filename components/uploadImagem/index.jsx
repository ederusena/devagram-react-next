import { useRef, useEffect } from 'react';

export default function UploadImagem({
  className = '',
  setImagemProp,
  imagemPreviewProp,
  imagemPreviewClassname = '',
  aoSetarReferencia,
}) {
  const refInputUploadFile = useRef(null);

  useEffect(() => {
    if (!aoSetarReferencia) {
      return
    }
    aoSetarReferencia(refInputUploadFile?.current);
  }, [refInputUploadFile?.current]);

  const modalUploadImage = () => {
    refInputUploadFile?.current?.click();
  };

  const handleImagem = () => {
    if (!refInputUploadFile?.current?.length) return;

    const imagem = refInputUploadFile?.current?.files[0];
    console.log('imagem Upload content', imagem);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imagem);
    fileReader.onloadend = () => {
      console.log('fileReader.result', fileReader.result);

      setImagemProp({
        preview: fileReader.result,
        imagem,
      });
    };
  };

  return (
    <div className={`upload__imagem-container ${className}`} onClick={modalUploadImage}>
      {imagemPreviewProp && (
        <div className="imagem__preview-container">
          <img src={imagemPreviewProp} alt="Imagem" className={imagemPreviewClassname} />
        </div>
      )}
      < input
        type='file'
        accept="image/* "
        className="oculto"
        ref={refInputUploadFile}
        onChange={handleImagem}
      />
    </div>
  );
}
