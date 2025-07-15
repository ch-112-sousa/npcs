import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import type { JSX } from 'react/jsx-runtime';
import { Pagination } from 'react-bootstrap';

interface PaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({ currentPage, totalPages, onPageChange }) => {
  const items: JSX.Element[] = [];
 

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      {items}
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default Paginate;