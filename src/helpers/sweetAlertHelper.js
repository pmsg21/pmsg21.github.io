import Swal from 'sweetalert2';

export const showPortfolioModal = (
  imgName,
  projectCodeUrl,
  projectCodeUrlText,
  projectDescription,
  projectDescriptionText,
  projectUrl,
  projectUrlText,
  title
) => {
  Swal.fire({
    title: `<h2>${title}</h2>`,
    html: `
            <img src="/assets/img/portfolio/${imgName}.png" alt="${imgName}" class="img-fluid d-block mb-4 portfolio-image-modal"/>
            <p class="text-left mb-1"><b>${projectUrlText}:</b> <a href="${projectUrl.link}" target="_blank" rel="noreferrer">${projectUrl.text}</a></p>
            <p class="text-left mb-1"><b>${projectCodeUrlText}:</b> <a href="${projectCodeUrl.link}" target="_blank" rel="noreferrer">${projectCodeUrl.text}</a></p>
            <p class="text-justify"><b>${projectDescriptionText}:</b> ${projectDescription}</p>
`,
    customClass: {
      popup: 'col-12 col-lg-7',
    },
    showCloseButton: true,
    showConfirmButton: false,
    showCancelButton: false,
  });
};
