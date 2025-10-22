function openMenu() {
  document.body.classList.add("menu--open");
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}
function renderBooks() {
  const booksWrapper = document.querySelector(".books");

const books = getBooks();
const booksHtml = books.map((book) => {
    return `<div class="book">
                            <figure class="book__img--wrapper">
                                <img class="book__img"
                                    src="${book.url}"
                                    alt="">
                            </figure>
                            <div class="book__title">
                                ${book.title}
                            </div>
                            <div class="book__rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                            </div>
                            <div class="book__price">
                                $${book.originalPrice}
                            </div>
                        </div>`
})
.join("")
  booksWrapper.innerHTML = booksHtml    
}
setTimeout(() => {
    renderBooks();
});
function filterBooks(event){
    if (event.target.value === `lowToHigh`){
        renderBooks(event.target.value);
    }

}


//
/// got tired, left off at 20:00
//

// DATA //

function getBooks() {
  return [
    {
      id: 1,
      title: "The Fall Of Gondolin",
      url: "https://books.google.com/books/publisher/content?id=bPJUDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0qvu51fRC2kI6AoDatIj76Hgoltw&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
    {
      id: 2,
      title: "The Adventures Of Tom Bombadil",
      url: "https://books.google.com/books/publisher/content?id=N_zzEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2WJzEhacc2biRxx7J4YJRzeN_FSA&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Beren and Lúthien",
      url: "https://books.google.com/books/publisher/content?id=r4pODQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U225A5QYCr9TYzPX1UutMtoEoWDmg&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
    {
      id: 4,
      title: "The Two Towers",
      url: " https://books.google.com/books/content?id=12e8PJ2T7sQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ZGpeqk2ed84chNpEKaNMLirIacg&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Tree and Leaf: Including Mythopoeia",
      url: "https://books.google.com/books/publisher/content?id=pxY_EAAAQBAJ&pg=PA2&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U20kIc5TbW8LkukEdkoQZJ5TEuxPQ&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
       {
      id: 6,
      title: "The Fall of Númenor",
      url: "https://books.google.com/books/publisher/content?id=owZwEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3qbHYs9_CEtd6MN4Haqxy4Evkk2w&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
       {
      id: 7,
      title: "Roverandom",
      url: "https://books.google.com/books/publisher/content?id=2TEPAAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0noP7gFRFecrqgp07s2Y1eQV0RMg&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
       {
      id: 8,
      title: "Farmer Giles of Ham",
      url: "https://books.google.com/books/publisher/content?id=IxD9EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0MpRFTpxoB1ycOAmhp7ilqFkKGuw&w=1280",
      originalPrice: 19.12,
      salePrice: 19.12,
      rating: 4.5,
    },
  ];
}

