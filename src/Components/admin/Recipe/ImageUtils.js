// ImageUtils.js

export const convertImage = async (imageFile) => {
    try {
        // Lógica para convertir la imagen a jpg o png si no cumple con los requisitos
        // Por ejemplo, podrías utilizar bibliotecas como sharp o canvas para realizar la conversión
        // En este ejemplo, simplemente se retorna la imagen original
        return imageFile
    } catch (error) {
        throw new Error(`Error al convertir la imagen: ${error.message}`)
    }
}

export const cropImageTo16x9 = async (imageFile) => {
    try {
        const image = new Image()
        image.src = URL.createObjectURL(imageFile)

        return new Promise((resolve, reject) => {
            image.onload = () => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                const targetWidth = image.height * (16 / 9)
                const startX = (image.width - targetWidth) / 2

                canvas.width = targetWidth
                canvas.height = image.height

                ctx.drawImage(
                    image,
                    startX,
                    0,
                    targetWidth,
                    image.height,
                    0,
                    0,
                    targetWidth,
                    image.height
                )

                // Convertir el canvas a Blob y retornar la nueva imagen recortada
                canvas.toBlob((blob) => {
                    const croppedImage = new File([blob], imageFile.name, { type: imageFile.type })
                    resolve(croppedImage)
                }, imageFile.type)
            }

            image.onerror = () => {
                reject(new Error('Error al cargar la imagen'))
            }
        })
    } catch (error) {
        throw new Error(`Error al recortar la imagen: ${error.message}`)
    }
}
