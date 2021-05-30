import React, { useEffect, useState } from "react";

// 하단 게시물 번호
// 전체 페이지 번호 수, 현재 페이지 번호, 현재 페이지 번호 Setter
function Pagination({ totalIndex, currentPage, setCurrentPage }) {
  // 페이지 번호들을 담음 (ex [1, 2, 3])
  const [numbers, setNumbers] = useState([]);
  // totalIndex가 변하면 실행
  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= totalIndex; i++) {
      // 1부터 전체 페이지 번호 수까지 배열 생성
      numbers.push(i);
    }
    setNumbers(numbers);
  }, [totalIndex]);

  const onPreviousClick = (e) => {
    // 이전 페이지 버튼 클릭
  };

  const onNextClick = (e) => {
    // 다음 페이지 버튼 클릭
  };

  return (
    <div className={"Pagination"}>
      {/* left arrow button */}
      {currentPage === 1 ? (
        // 첫 번째 페이지라면
        <button className="ButtonArrow" disabled>
          <img src="/images/feedPage/left_arrow_disabled.png" alt="disabled" />
        </button>
      ) : (
        <button className="ButtonArrow" onClick={onPreviousClick}>
          <img src="/images/feedPage/left_arrow.png" alt="disabled" />
        </button>
      )}

      {/* 페이지 번호들 span에 감싸 반환 */}
      {numbers.map((number) => (
        <span
          key={number}
          // 만약 현재 페이지 번호라면 Active 클래스명 추가
          className={
            number === currentPage
              ? "PaginationNumber ActivePaginationNumber"
              : "PaginationNumber"
          }
        >
          {number}
        </span>
      ))}

      {/* right arrow button */}
      {currentPage === totalIndex ? (
        // 마지막 페이지라면
        <button className="ButtonArrow" disabled>
          <img src="/images/feedPage/right_arrow_disabled.png" alt="disabled" />
        </button>
      ) : (
        <button className="ButtonArrow" onClick={onNextClick}>
          <img src="/images/feedPage/right_arrow.png" alt="disabled" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
