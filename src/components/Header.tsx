import React from 'react'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="text-4xl bold">{title}</h1>
  );
};

export default Header
