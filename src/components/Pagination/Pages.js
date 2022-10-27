import React from "react";
import config from "../../constants";
import "./Pages.css";
const Pages = ({
	handlePaginate,
	dataLength,
	handleAllDelete,
	page,
	setPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(dataLength / config.pageSize); i++) {
		pageNumbers.push(i);
	}

	//Page Navigations
	const handlePrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const handleNextPage = () => {
		let n = Math.ceil(dataLength / config.pageSize);

		if (page < n) {
			setPage(page + 1);
		}
	};
	const handleFirstPage = () => {
		setPage(1);
	};
	const handleLastPage = () => {
		setPage(Math.ceil(dataLength / config.pageSize));
	};

	return (
		<div>
			{pageNumbers.length && (
				<div className="bottom-nav">
					<button onClick={handleAllDelete} className="delete-btn">
						Delete Selected
					</button>
					<nav>
						<div className="pagination">
							<i
								className="fas fa-duotone fa-angles-left left-arrow arrow"
								onClick={handleFirstPage}
							></i>
							<i
								className="fas fa-duotone fa-angle-left left-arrow arrow"
								onClick={handlePrevPage}
							></i>
							{pageNumbers.map((num) => (
								<button
									key={num}
									className={
										page === num ? "page-item-act page-item" : "page-item"
									}
									onClick={() => handlePaginate(num)}
									starclassName="page-link"
								>
									{num}
								</button>
							))}
							<i
								className="fas fa-duotone fa-angle-right right-arrow arrow"
								onClick={handleNextPage}
							></i>
							<i
								className="fas fa-duotone fa-angles-right right-arrow arrow"
								onClick={handleLastPage}
							></i>
						</div>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Pages;
