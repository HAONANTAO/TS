import React from 'react';

interface ChildProps {
  color: string;
}
export const Child = ({ color }: ChildProps) => {
  return <div>Child 1 {color}</div>;
};
