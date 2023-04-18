document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".board > div");
  const resetBtn = document.querySelector("button[type='button']");
  const h2 = document.querySelector("h2");

  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
  let flag = true;
  let cnt = 0;

  resetBtn.addEventListener("click", () => {
    if (!flag) return;

    h2.innerHTML = "";
    arr.sort(() => Math.random() - 0.5);
    for (let box of boxes) box.innerHTML = box.getAttribute("id").slice(-1);
    flag = false;
    cnt = 0;
  });

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      let n = box.textContent;
      if (flag || n === "") return;

      if (cnt === 8) {
        box.innerHTML = "<img src='./img/heart.png' alt='heart' />";
        h2.innerHTML = "성공";
        flag = true;
        return;
      }

      if (arr[n - 1] === 0) {
        box.innerHTML = "<img src='./img/heart.png' alt='heart' />";
        cnt++;
      } else {
        box.innerHTML = "<img src='./img/boom.png' alt='boom' />";
        h2.innerHTML = "실패";
        flag = true;
      }
    });
  });
});
