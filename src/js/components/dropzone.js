import { Dropzone } from 'dropzone';

//Dropzone для Несколько сторон участников

const commandImgs = document.querySelectorAll('.command-dropzone');

if (commandImgs) {
  commandImgs.forEach((commandImg) => {
    const addBtnDropzone = commandImg.querySelector(
      '.big-form__command-btn-dropzone',
    );

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
    });
  });
}

//Загрузка картинок

const fotosDropZones = document.querySelectorAll('.dropzone-wrapper');

if (fotosDropZones) {
  fotosDropZones.forEach((dropZoneItem) => {
    const addPictureButton = dropZoneItem.querySelector('.btn-add-logo');
    const pictureContainer = dropZoneItem.querySelector('.dropzone-previews');

    let organizerLogoDropzone = new Dropzone(dropZoneItem, {
      maxFilesize: 5,
      url: './data/test.txt',
      maxFiles: 1,
      thumbnailWidth: 108,
      thumbnailHeight: 108,
      acceptedFiles: '.png, .jpeg, .jpg, .svg',
      addRemoveLinks: true,
      dictRemoveFile: 'удалить',
      clickable: addPictureButton,
      previewsContainer: pictureContainer,
    });

    const textToHide = dropZoneItem.querySelectorAll('.dropzone-hide');

    /// 'succsess'
    organizerLogoDropzone.on('complete', function (file, response) {
      textToHide.forEach((item) => item.classList.add('hidden'));

      const parent = document.querySelector('.dz-details');

      const stringDate = document.createElement('span');
      const date = new Date();
      const currentTime = date.toLocaleTimeString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
      });
      const currentDate = date.toLocaleDateString();

      stringDate.classList.add('dz-date');
      stringDate.textContent = `Загружен в ${currentTime} ${currentDate}`;
      parent.prepend(stringDate);
    });

    organizerLogoDropzone.on('removedfile', function (file, response) {
      textToHide.forEach((item) => item.classList.remove('hidden'));
    });
  });
}

//Загрузка документов

const docsDropZones = document.querySelectorAll(
  '.document-item .document-dropzone',
);

if (docsDropZones) {
  docsDropZones.forEach((dropZoneItem) => {
    const addDocButton = dropZoneItem.querySelector(
      '.document-download button',
    );
    const docContainer = dropZoneItem.querySelector('.dropzone-previews');

    let organizerDocDropzone = new Dropzone(dropZoneItem, {
      maxFilesize: 10,
      url: './data/test.txt',
      maxFiles: 1,
      thumbnailWidth: 108,
      thumbnailHeight: 108,
      acceptedFiles: '.pdf',
      addRemoveLinks: true,
      dictRemoveFile: 'Удалить',
      clickable: addDocButton,
      previewsContainer: docContainer,
    });

    const textToHide = dropZoneItem.querySelectorAll('.dropzone-hide');

    organizerDocDropzone.on('complete', function (file, response) {
      textToHide.forEach((item) => item.classList.add('hidden'));

      const parent = document.querySelector('.dz-details');

      const stringDate = document.createElement('span');
      const date = new Date();
      const currentTime = date.toLocaleTimeString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
      });
      const currentDate = date.toLocaleDateString();

      stringDate.classList.add('dz-date');
      stringDate.textContent = `Загружен в ${currentTime} ${currentDate}`;
      parent.prepend(stringDate);
    });

    organizerDocDropzone.on('removedfile', function (file, response) {
      textToHide.forEach((item) => item.classList.remove('hidden'));
    });
  });
}

//Загрузка картинок в галерею
const galleryDropZone = document.querySelector('.foto-galery');

if (galleryDropZone) {
  const addGalleryItemButton = galleryDropZone.querySelector(
    '.foto-gallery-button',
  );
  const galleryContainer = galleryDropZone.querySelector('.dropzone-previews');

  let organizerGalleryDropzone = new Dropzone(galleryDropZone, {
    maxFilesize: 5,
    url: './data/test.txt',
    maxFiles: 10,
    thumbnailWidth: 108,
    thumbnailHeight: 108,
    acceptedFiles: '.png, .jpeg, .jpg, .svg',
    addRemoveLinks: true,
    dictRemoveFile: '',
    clickable: addGalleryItemButton,
    previewsContainer: galleryContainer,
  });

  let fotosCount;
  const fotosCountTitle = galleryDropZone.querySelector(
    '.foto-galery-title span',
  );

  /// 'succsess'
  organizerGalleryDropzone.on('complete', function (file, response) {
    fotosCount = organizerGalleryDropzone.files.length;
    fotosCountTitle.innerHTML = fotosCount;
  });

  organizerGalleryDropzone.on('removedfile', function (file, response) {
    fotosCount = organizerGalleryDropzone.files.length;
    fotosCountTitle.innerHTML = fotosCount;
  });
}
