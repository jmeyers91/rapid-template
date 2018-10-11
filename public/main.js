
async function main() {
  'use strict';

  const response = await fetch('/api/posts');
  const { posts } = await response.json();
  const postsEl = document.querySelector('.posts');

  for(let post of posts) {
    const el = document.createElement('li');
    el.innerText = `${post.title} by ${post.author.name}`;
    postsEl.appendChild(el);
  }
}

main();
