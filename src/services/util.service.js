export const utilService = {
  delay,
  getRandomInt,
  makeId,
  getHeaderLinks,
  getDemoItems,
  getEmptyItem
}

function delay(ms = 1500) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getHeaderLinks() {
  return [
    {
      id: makeId(),
      path: '/',
      title: 'Overview',
      icon: 'fa-light fa-house'
    },
    {
      id: makeId(),
      path: '/contact',
      title: 'Contacts',
      icon: "fa-light fa-address-card" 
    },
    {
      id: makeId(),
      path: '/statistic',
      title: 'Statistics',
      icon: 'fa-light fa-chart-area'
    },
  ]
}

function getDemoItems() {
  return [
    {
      _id: makeId(),
      byUser: {},
      createdAt: Date.now(),
      imgSrc: '',
      icon: 'fa-light fa-earth-asia',
      title: 'Random title',
      subtitle: 'Random subtitle',
      body: _getLorem()
    },
    {
      _id: makeId(),
      byUser: {},
      createdAt: Date.now(),
      imgSrc: '',
      icon: 'fa-light fa-envelope-open-text',
      title: 'Random title',
      subtitle: 'Random subtitle',
      body: _getLorem()
    },
    {
      _id: makeId(),
      byUser: {},
      createdAt: Date.now(),
      imgSrc: '',
      icon: 'fa-light fa-headphones',
      title: 'Random title',
      subtitle: 'Random subtitle',
      body: _getLorem()
    },
  ]
}

function getEmptyItem() {
  return {
    imgSrc: '',
    icon: '',
    title: '',
    subtitle: '',
    body: ``
  }
}

function _getLorem() {
  return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam iure repellendus a enim laborum nemo ex, quod, dolorem ratione hic quasi nesciunt qui ipsam, rem dignissimos atque earum consectetur. Ut, odio earum vero nulla optio eum incidunt animi! Laboriosam similique tempore voluptatibus tenetur, saepe quidem iusto ut mollitia necessitatibus nam officia atque nostrum incidunt odit repellendus temporibus quas explicabo ? Aspernatur atque illum vel nobis commodi ? Quod impedit consequuntur nemo molestias eveniet exercitationem, soluta deleniti obcaecati maxime neque ratione qui magnam similique ducimus accusantium assumenda sit placeat voluptatum eligendi recusanda e.Beatae blanditiis, dolor expedita qui exercitationem suscipit voluptatibus animi dignissimos earum sed velit fugiat officiis quod aliquam ? Possimus in eos, rem alias explicabo sequi esse ducimus aperiam perspiciatis quaerat ? Doloribus. Dolorum laboriosam earum sequi quibusdam culpa ? Inventore non quo modi tempora quibusdam quod maxime facere fuga.Et iusto impedit porro, nihil ut voluptate mollitia ex animi, laborum, laboriosam cum ipsam! Cumque quod id hic quae ea saepe laudantium ab voluptates rem quibusdam consectetur laborum consequuntur doloribus voluptas maxime repellendus deleniti excepturi, aperiam odit necessitatibus dignissimos odio praesentium labore ex.Exercitationem ? Inventore esse nostrum corrupti harum reiciendis aspernatur dolorum dicta voluptatibus, quo, in provident cupiditate! Voluptatem ducimus suscipit, ad recusandae cum consequuntur repellendus nemo a sint iusto aspernatur officia culpa sapiente. Exercitationem corporis voluptatem obcaecati nemo assumenda, voluptas, nostrum similique ut atque voluptate ullam quae minus illo commodi ? Delectus minima dolor, maiores iusto inventore eius asperiores, id aliquam, ex cum unde. Accusantium, ea impedit.A non neque quia rerum animi dolorum ab cupiditate saepe maxime minus blanditiis numquam nihil sit magni laudantium voluptatem voluptatum quibusdam, dignissimos odit nobis eius nemo.Soluta ? Beatae architecto cum iste aut voluptatibus voluptatum eligendi ducimus sed dolorum explicabo facere dignissimos accusantium unde non, eaque autem ? Reiciendis culpa eaque voluptatibus hic dolor impedit doloremque, ipsum sit perferendis ? "
}
