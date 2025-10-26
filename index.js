let books;

function openMenu() {
  document.body.classList.add("menu--open");
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}
async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  const booksData = await getBooks();

  if (filter === "lowToHigh") {
    booksData.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "highToLow") {
    booksData.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "rating") {
    booksData.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml = booksData
    .map((book) => {
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
      ${ratingsHtml(book.rating)}
    </div>
            <div class="book__price">
        ${priceHtml(book.originalPrice, book.salePrice)}
     </div>
       </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
}

function priceHtml(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`;
  } else {
    return `<span class="full-price"> $${originalPrice.toFixed(
      2
    )}</span> $${salePrice}`;
  }
}

function ratingsHtml(rating) {
  let ratingHtml = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHtml += "<i class='fa-solid fa-star'></i>";
  }
  if (!Number.isInteger(rating)) {
    ratingHtml += "<i class='fa-solid fa-star-half'></i>";
  }
  return ratingHtml;
}
function filterBooks(event) {
  renderBooks(event.target.value);
}
setTimeout(() => {
  renderBooks();
});

// FAKE DATA //

function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "The Fall Of Gondolin",
          url: "https://books.google.com/books/publisher/content?id=bPJUDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0qvu51fRC2kI6AoDatIj76Hgoltw&w=1280",
          originalPrice: 29.43,
          salePrice: 19.12,
          rating: 4,
        },
        {
          id: 2,
          title: "The Adventures Of Tom Bombadil",
          url: "https://books.google.com/books/publisher/content?id=N_zzEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2WJzEhacc2biRxx7J4YJRzeN_FSA&w=1280",
          originalPrice: 19.12,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 3,
          title: "Beren and Lúthien",
          url: "https://books.google.com/books/publisher/content?id=r4pODQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U225A5QYCr9TYzPX1UutMtoEoWDmg&w=1280",
          originalPrice: 20.99,
          salePrice: 15.21,
          rating: 5,
        },
        {
          id: 4,
          title: "The Two Towers",
          url: "https://books.google.com/books/content?id=12e8PJ2T7sQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ZGpeqk2ed84chNpEKaNMLirIacg&w=1280",
          originalPrice: 25.99,
          salePrice: null,
          rating: 3.5,
        },
        {
          id: 5,
          title: "Tree and Leaf: Including Mythopoeia",
          url: "https://books.google.com/books/publisher/content?id=pxY_EAAAQBAJ&pg=PA2&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U20kIc5TbW8LkukEdkoQZJ5TEuxPQ&w=1280",
          originalPrice: 22.45,
          salePrice: 15.99,
          rating: 4.5,
        },
        {
          id: 6,
          title: "The Fall of Númenor",
          url: "https://books.google.com/books/publisher/content?id=owZwEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3qbHYs9_CEtd6MN4Haqxy4Evkk2w&w=1280",
          originalPrice: 39.48,
          salePrice: null,
          rating: 3.5,
        },
        {
          id: 7,
          title: "Roverandom",
          url: "https://books.google.com/books/publisher/content?id=2TEPAAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0noP7gFRFecrqgp07s2Y1eQV0RMg&w=1280",
          originalPrice: 38.94,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 8,
          title: "Farmer Giles of Ham",
          url: "https://books.google.com/books/publisher/content?id=IxD9EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0MpRFTpxoB1ycOAmhp7ilqFkKGuw&w=1280",
          originalPrice: 38.99,
          salePrice: 29.99,
          rating: 4,
        },
      ]);
    }, 1000);
  });
}
