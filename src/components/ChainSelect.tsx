import React from 'react';

interface ISelectProps {
  label?: string;
  classes: string;
  selectId: string;
  selectName: string;
}

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(' ');
// }

const ChainSelect = ({
  label,
  classes,
  selectId,
  selectName,
}: ISelectProps) => {
  return (
    <>
      {label && (
        <label htmlFor="from" className="block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <select
        id={selectId}
        name={selectName}
        className={`common-select ${classes}`}
      >
        <option className="bg-wagpay-dark">Polygon</option>
        <option className="bg-wagpay-dark">USDC</option>
        <option className="bg-wagpay-dark">Ethereum</option>
        <option className="bg-wagpay-dark">Avalanche</option>
        <option className="bg-wagpay-dark">BNB</option>
      </select>
    </>
  );
};

export default ChainSelect;
