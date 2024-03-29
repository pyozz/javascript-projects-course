const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

const $menuList = document.querySelector('.menu-list')
const $buttonGroup = document.querySelector('.button-group')

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu)
  displayButtonItems()
})

function displayMenuItems(menuItems) {
  let displayItems = menuItems.map((item) => {
    return /* html */ `
      <li class="menu-item">
        <article class="menu-card">
          <div class="menu-card-image">
            <img src=${item.img} alt=${item.title} />
          </div>

          <div class="menu-card-info">
            <div class="info-header">
              <h2 class="title">${item.title}</h2>
              <span class="price">$${item.price}</span>
            </div>

            <p class="description">
              ${item.desc}
            </p>
          </div>
        </article>
      </li>
    `
  })

  displayItems = displayItems.join('')
  $menuList.innerHTML = displayItems
}

function displayButtonItems() {
  const categories = menu.reduce(
    (acc, cur) => {
      if (!acc.includes(cur.category)) {
        acc.push(cur.category)
      }

      return acc
    },
    ['all']
  )

  const categoryButtons = categories
    .map((category) => {
      return /* html */ `
      <button class="btn-filter" type="button" data-id="${category}">${category}</button>
    `
    })
    .join('')

  $buttonGroup.innerHTML = categoryButtons

  const $filterButton = document.querySelectorAll('.btn-filter')
  $filterButton.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      // html
      const category = e.currentTarget.dataset.id
      // js
      const categoryMenu = menu.filter((menuItem) => {
        return menuItem.category === category // html = js
      })

      if (category === 'all') {
        displayMenuItems(menu)
      } else {
        // 필터된 배열일 경우
        displayMenuItems(categoryMenu)
      }
    })
  })
}
