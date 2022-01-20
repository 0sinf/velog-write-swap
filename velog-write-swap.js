/**
 * 벨로그 작성 시 오른쪽에 입력창이 있는게 편해서 서로 스왑하는 코드
 *
 * parentNode.insertBefore(newNode, referNode);
 * parentNode 내에서 newNode를 referNode 앞에 삽입합니다.
 *
 * 벨로그는 #root > div > div에 입력창(left), 미리보기 창(right) 2개의 노드가 존재합니다.
 * 입력 창 앞에 미리보기 창을 삽입해 좌우를 바꿉니다.
 */

const container = document.querySelector("#root > div > div");

const swap = function (container) {
  const left = container.children[0];
  const right = container.children[1];
  container.insertBefore(right, left);
};

swap(container);
