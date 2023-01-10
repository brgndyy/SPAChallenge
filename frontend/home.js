// 아이디 셀렉터

const post_ul = document.getElementById("post_list");

const IMGURL = `https://api.unsplash.com/photos/?client_id=up6CzpiP44kToAJe1U1FdqFRfHLxXzBIR2A9Yc_N7zc`;

// 포스팅 글들 로딩하기
const getPosts = async () => {
  axios
    .get("http://43.201.103.199/posts")
    .then((res) => {
      const posts = res.data.data.posts;

      post_ul.innerHTML = posts
        .map((post) => {
          return `<li id="post" class="post">
        <a href="">
          <img
            src=${post.image}
            alt="thumnailImg"
          />
          <div>
            <strong>${post.title}</strong>
            <p>${post.content}</p>
          </div>
        </a>
      </li>`;
        })
        .join("");
    })
    .catch((error) => console.error(error));
};
getPosts();
