var posts=["posts/4a17b156.html","posts/ea1f0973.html","posts/dfb8a81f.html","posts/96a41905.html","posts/5fd6e59a.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};