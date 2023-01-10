// 아이디 셀렉터

const post_ul = document.getElementById("post-list");

const IMGURL = `https://api.unsplash.com/photos/?client_id=up6CzpiP44kToAJe1U1FdqFRfHLxXzBIR2A9Yc_N7zc`;

// 포스팅 글들 로딩하기
const getPosts = async () => {
  axios
    .get("http://43.201.103.199/posts")
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((error) => console.error(error));
};
getPosts();

// const li = document.createElement('li');
// li.classList.add('post');
// const a = document.createElement('a');

// li.append(a);
