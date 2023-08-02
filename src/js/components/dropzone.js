import {Dropzone} from 'dropzone'

//Dropzone для Несколько сторон участников

const commandImgs = document.querySelectorAll('.command-dropzone')

if (commandImgs) {
    commandImgs.forEach(commandImg => {
        const addBtnDropzone = commandImg.querySelector('.big-form__command-btn-dropzone')

        let commandImgDropzone = new Dropzone(commandImg, {
            maxFilesize: 5,
            url: '/include/ajax/upload_image.php',
            maxFiles: 1,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            acceptedFiles: '.png, .jpeg, .jpg',
            addRemoveLinks: true,
            dictRemoveFile: 'удалить',
            clickable: addBtnDropzone,
        })
    })
}


//Загрузка логотипа

const organizerProfileLogo = document.querySelector('#profile-logo')

if (organizerProfileLogo) {
    let organizerLogoDropzone = new Dropzone(organizerProfileLogo, {
        maxFilesize: 5,
        url: './data/test.txt',
        maxFiles: 1,
        thumbnailWidth: 108,
        thumbnailHeight: 108,
        acceptedFiles: '.png, .jpeg, .jpg, .svg',
        addRemoveLinks: true,
        dictRemoveFile: 'удалить',
        clickable: '.big-form__btn-add-logo',
        previewsContainer: '.big-form__dropzone-previews'
    })

    organizerLogoDropzone.on('success', function (file, response) {
        const parent = document.querySelector('.dz-details')
        const paragraph = document.createElement('span')
        const date = new Date()

        const setZero = (date) => (date >= 0 && date < 10) ? `0${date}` : date

        const year = date.getFullYear()
        const month = setZero(date.getMonth() + 1)
        const day = setZero(date.getDate())
        const hours = setZero(date.getHours())
        const minutes = setZero(date.getMinutes())

        paragraph.classList.add('dz-date')
        paragraph.textContent = `Загружен в ${hours}:${minutes} ${day}.${month}.${year}`
        parent.prepend(paragraph)
    })
}















