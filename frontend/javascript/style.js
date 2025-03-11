// Version
const version = 'WOODcraft';
document.getElementById('app-version').innerText = version;

// Open Information Menu
document.getElementById('information-button-open').addEventListener('click', () => {
    document.getElementById('information-container').className = 'container-overlay-active poppins';
});

// Close Information Menu
document.getElementById('information-button-close').addEventListener('click', () => {
    document.getElementById('information-container').className = 'container-overlay-inactive poppins';
});

// Add Information

const list_qna = [
    {'question':'What is TeraDL?', 'answer':'TeraDL is a platform for streaming or downloading Terabox files for free and fast'},
    {'question':'How to use?', 'answer':'Simply enter the Terabox URL you want to download, press submit, wait for the file list to appear, then select the Download or Play Streaming option.'},
    {'question':'What is the difference between download 1, 2, and 3?', 'answer':'Option 1 is downloading the URL with slow but steady speed<div class="divisor-spacing"></div>Option 2 is downloading the URL with medium speed<div class="divisor-spacing"></div>Option 3 is downloading the URL with high speed but often error'}, {'question':'Is this platform official?', 'answer':'This platform is made independently and has no association with Terabox. All actions are the responsibility of the user'}, ];

function addInfo() {
    const box_info = document.getElementById('container-qna');
    list_qna.forEach((item) => {
        const new_element = document.createElement('div');
        new_element.className = 'box-qna';
        new_element.innerHTML = `
            <span class="question">${item.question}</span>
            <span class="answer">${item.answer}</span>`;
        box_info.appendChild(new_element);
    });
}

addInfo();

// Add Contact

const list_contact = [
    {'href':'https://t.me/Opleech_WD', 'icon':'<i class="fa-brands fa-telegram"></i>', 'text':'WDZONE'},
    {'href':'https://www.instagram.com/woodcraft.insta/#', 'icon':'<i class="fa-brands fa-square-instagram"></i>', 'text':'WOODcraft'},
    {'href':'https://github.com/SudoR2spr', 'icon':'<i class="fa-brands fa-square-github"></i>', 'text':'SudoR2spr'},
];

function AddContact() {
    const box_contact = document.getElementById('container-contact');
    list_contact.forEach((item) => {
        const new_element = document.createElement('a');
        Object.assign(new_element, { href: item.href, target: '_blank', rel: 'noopener' });
        new_element.innerHTML = `${item.icon}<span>${item.text}</span>`;
        box_contact.appendChild(new_element);
    });
}

AddContact();

// Zoom Image

function zoom(element) {
    const overlay_zoom = document.getElementById('zoom-container');
    overlay_zoom.className = 'container-zoom-active poppins';
    overlay_zoom.innerHTML = `<img src="${element.src}">`;
}

function unzoom(element) {
    const overlay_zoom = document.getElementById('zoom-container');
    overlay_zoom.innerHTML = '';
    overlay_zoom.className = 'container-zoom-inactive poppins';
}
