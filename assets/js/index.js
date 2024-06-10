// 1
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', (e) => {
    btn1.textContent = 'Changed text';
});

// 2
const btn2 = document.querySelector('.btn2');
btn2.onclick = e => {
    btn2.style.backgroundColor = 'black';
    btn2.style.color = 'white';
}

// 3
const image = document.querySelector('.image');
image.onmouseenter = e => image.src = './assets/images/cat2.jpg';
image.onmouseout = e => image.src = './assets/images/cat1.jpg';

// 4
const cards = document.querySelector('.cards');
const loadUserBtn = document.querySelector('.load-user-btn');

const user = {
    firstName: 'Test',
    lastName: 'Testovych',
    profilePhoto: 'https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg',
    birthday: new Date('2000-05-16'),
    nickname: 'super dev',
    likesCount: 10,

    getAge() {
        var today = new Date();
        var age = today.getFullYear() - this.birthday.getFullYear();
        var m = today.getMonth() - this.birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthday.getDate())) {
            age--;
        }
        return age;
    },

    getBirthdayStr() {
        return `${user.birthday.getFullYear()}-${user.birthday.getMonth() + 1}-${user.birthday.getDate()}`;
    }
}

loadUserBtn.addEventListener('click', e => {
    cards.insertAdjacentHTML('beforeend', `
        <article class="card">
            <div class="card-photo-wrapper">
                <img class="card-photo" src="${user.profilePhoto}" alt="${user.firstName} photo">
            </div>
            <section class="card-main-section">
                <h3 class="card-name">${user.firstName} ${user.lastName}</h3>
                <p class="card-nickname">${user.nickname}</p>
                <p class="card-birthday"><i class="card-birthday-icon fa-solid fa-calendar-days"></i> ${user.getBirthdayStr()}</p>
                <p class="card-likes"><i class="card-likes-icon fa-solid fa-heart"></i> <span class="card-likes-span">${user.likesCount}</span></p>
            </section>
        </article>
    `);
    loadUserBtn.remove();

    const likesIcon = document.querySelector('.card-likes-icon');
    const likesSpan = document.querySelector('.card-likes-span');

    let isLiked = false;
    likesIcon.addEventListener('click', e => {
        if (isLiked) {
            likesIcon.style.color = '#8f8f8f';
            likesSpan.textContent = Number(likesSpan.textContent) - 1;
        } else {
            likesIcon.style.color = 'red';
            likesSpan.textContent = Number(likesSpan.textContent) + 1;
        }
        isLiked = !isLiked;
    });

    const birthdayEl = document.querySelector('.card-birthday');

    birthdayEl.onmouseenter = e => birthdayEl.textContent = user.getAge();
    birthdayEl.onmouseout = e => birthdayEl.textContent = user.getBirthdayStr();
});