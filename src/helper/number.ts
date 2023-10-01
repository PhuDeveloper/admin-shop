import numbro from 'numbro';

// 1,200,000 VND -> 1200000
const convertVNDFormatToNumber = (money: string): number => {
  if (!money) {
    return 0;
  }

  if (money.includes('VND')) {
    return +money.slice(0, -2).replaceAll(',', '');
  }

  return +money.replaceAll(',', '');
};

// 1200000=> 1,200,000 VND
function formatNumber(value: number | string, option: numbro.Format = {}) {
  return numbro(value).format({
    mantissa: 0,
    thousandSeparated: true,
    average: false,
    ...option,
  });
}

function calculateTheAmountAfterDiscount(priceOrg: number, discount: number): number {
  return priceOrg - (priceOrg * discount) / 100;
}

export { convertVNDFormatToNumber, formatNumber, calculateTheAmountAfterDiscount };
